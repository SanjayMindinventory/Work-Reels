import React, { useCallback, useEffect, useMemo } from 'react'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { MUTATION, QUERY } from 'lib/graphql'
import { ALLOWED_ROLES, AUTH_PROFILE_ID } from 'lib/constants'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { Pages } from 'components/nav/pages'
import { BottomNav } from 'components/bottom-nav/bottom-nav'
import {
  GetFirstAgreement,
  GetFirstAgreementVariables,
} from 'lib/graphql/types'
import {
  SignUp,
  SignUpVariables,
  Login,
  LoginVariables,
} from 'lib/graphql/types'
import ReactMarkdown from 'react-markdown'
import { setUserTokens, useUserSession } from 'utils/hooks'

type Inputs = {
  email: string
  password: string
  password_confirm: string
  firstName: string
  lastName?: string
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string(),
  password: Joi.string().min(4).max(20).required(),
  password_confirm: Joi.any()
    .valid(Joi.ref('password'))
    .messages({
      'any.only': 'Password miss match',
    })
    .required(),
})

const Register: NextPage<any> = (props) => {
  const router = useRouter()
  // redirect user to /video if already logged in
  const userInfo = useUserSession()

  useEffect(() => {
    if (userInfo && userInfo.id) {
      router.replace(Pages.Video)
    }
  }, [userInfo])

  const roleArg = router.query.role
  const orgIdArg = router.query.orgId
  const toast = useToast()
  const { data } = useQuery<GetFirstAgreement, GetFirstAgreementVariables>(
    QUERY.GET_FIRST_AGREEMENTS,
    {
      variables: {
        type: 'User',
      },
    },
  )
  const agreementData = useMemo(() => data?.agreementsList?.items?.[0], [data])
  const agreementId = useMemo(() => agreementData?.version, [agreementData])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: joiResolver(schema),
  })
  const initialRef: any = React.useRef()

  const [registerUser, { loading, error }] = useMutation<
    SignUp,
    SignUpVariables
  >(MUTATION.SIGNUP_MUTATION, {
    async onCompleted(data) {
      console.log(
        '🚀 ~ file: register.tsx ~ line 53 ~ onCompleted ~ data',
        data,
      )
      toast({
        title: 'Sign up successful!',
        position: 'top-right',
        description: 'Your account has been created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
    onError({ graphQLErrors }) {
      const msg = graphQLErrors
        .map((err) => err.message.replace('ValidationError: ', ''))
        .join(';')
      toast({
        title: 'Sign up failed!',
        position: 'top-right',
        description: msg,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.log('error: ', msg)
    },
  })

  const client = useApolloClient()
  const [login, { loading: loadingLogin, error: errorLogin }] = useMutation<
    Login,
    LoginVariables
  >(MUTATION.LOGIN_MUTATION, {
    async onCompleted(data) {
      client.resetStore().then().catch()
      client.cache.gc()
      const token = data?.userLogin?.auth?.idToken
      const refreshToken = data?.userLogin?.auth?.refreshToken
      if (token) {
        setUserTokens(token, refreshToken as string)
      }
      router.push(Pages.Video)
    },
    onError({ graphQLErrors }) {
      const msg = graphQLErrors
        .map((err) => err.message.replace('ValidationError: ', ''))
        .join(';')
      toast({
        title: 'Sign in failed!',
        position: 'top-right',
        description: msg,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.log('error: ', msg)
    },
  })

  const onSubmit = useCallback(
    (data: Inputs) => {
      const { password_confirm, ...rest } = data
      if (
        !orgIdArg ||
        typeof orgIdArg !== 'string' ||
        !roleArg ||
        typeof roleArg !== 'string' ||
        !Object.keys(ALLOWED_ROLES).includes(roleArg) ||
        typeof agreementId === 'undefined'
      ) {
        toast({
          title: 'Required orgId and role and agreementId',
          position: 'top-right',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      registerUser({
        variables: {
          ...rest,
          authProfileId: AUTH_PROFILE_ID,
          orgId: orgIdArg,
          role: ALLOWED_ROLES[roleArg],
          agreementID: agreementId?.toString() || '',
        },
      })
        .then((result) => {
          if (result.data) {
            login({
              variables: {
                email: rest.email,
                password: rest.password,
                authProfileId: AUTH_PROFILE_ID,
              },
            })
          }
        })
        .catch((e) => console.error(e))
    },
    [registerUser, login, orgIdArg, roleArg, agreementId],
  )

  return (
    <Layout title='Sign Up | WorkReels'>
      <div className='container mx-auto max-w-md md:max-w-xl mt-10 md:mt-20 px-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 lg:p-10 bg-white shadow-lg rounded'
        >
          <h1 className='text-2xl mb-4'>Sign Up</h1>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name='email'
              ref={(e) => {
                register(e)
                initialRef.current = e
              }}
              placeholder='Email'
            />
            {errors?.email?.message && (
              <p className='text-red-600 mt-2'>{errors.email.message}</p>
            )}
          </FormControl>

          <FormControl mt={4} className='md:flex'>
            <div className='md:w-1/2 md:mr-2'>
              <FormLabel>Password</FormLabel>
              <Input
                ref={register}
                name='password'
                placeholder='Password'
                type='password'
              />
              {errors?.password?.message && (
                <p className='text-red-600 mt-2'>{errors.password.message}</p>
              )}
            </div>
            <div className='mt-4 md:mt-0 md:w-1/2 md:ml-2'>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                ref={register}
                name='password_confirm'
                placeholder='Password'
                type='password'
              />
              {errors?.password_confirm?.message && (
                <p className='text-red-600 mt-2'>
                  {errors.password_confirm.message}
                </p>
              )}
            </div>
          </FormControl>
          <FormControl mt={4} className='md:flex'>
            <div className='md:w-1/2 md:mr-2'>
              <FormLabel>First name</FormLabel>
              <Input ref={register} name='firstName' placeholder='First name' />
              {errors?.firstName?.message && (
                <p className='text-red-600 mt-2'>{errors.firstName.message}</p>
              )}
            </div>
            <div className='mt-4 md:mt-0 md:w-1/2 md:ml-2'>
              <FormLabel>Last name</FormLabel>
              <Input ref={register} name='lastName' placeholder='Last name' />
              {errors?.lastName?.message && (
                <p className='text-red-600 mt-2'>{errors.lastName.message}</p>
              )}
            </div>
          </FormControl>
          <p className='pt-4'>
            By selecting <span className='bold'>Agree and Register</span> below,
            I agree to WorkReel&apos;s&nbsp;
            <span
              className='text-blue-500 italic underline cursor-pointer'
              role='button'
              onClick={onOpen}
            >
              Terms and Conditions
            </span>
            .
          </p>
          <Button
            colorScheme='blue'
            mr={3}
            type='submit'
            className='my-6'
            isLoading={loading || loadingLogin}
          >
            {loadingLogin ? 'Signing in...' : 'Agree and Register'}
          </Button>
          <span className='block italic'>
            Already have an account?{' '}
            <Link href='/login'>
              <a className='text-blue-600 not-italic font-semibold hover:underline'>
                Log In
              </a>
            </Link>
          </span>
        </form>
      </div>
      <BottomNav />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='max-w-xs md:max-w-4xl md:mt-24 md:mx-6 pt-6 relative'>
          <ModalHeader className='text-xl px-4 pb-0 md:px-10 md:text-2xl'>
            Terms and Conditions
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} className='px-4 md:px-10'>
            <ReactMarkdown>
              {(agreementData && agreementData.body) || ''}
            </ReactMarkdown>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default Register
