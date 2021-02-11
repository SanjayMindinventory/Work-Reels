import React, { useCallback } from 'react'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useApolloClient, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { MUTATION } from 'lib/graphql'
import { AUTH_PROFILE_ID } from 'lib/constants'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import { setUserTokens } from 'utils/hooks'
import { Pages } from 'components/nav/pages'
import { BottomNav } from 'components/bottom-nav/bottom-nav'

type Inputs = {
  email: string
  password: string
}

const Register: NextPage<any> = (props) => {
  const router = useRouter()
  const toast = useToast()

  const { register, handleSubmit, errors } = useForm<Inputs>()
  const initialRef: any = React.useRef()

  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(MUTATION.LOGIN_MUTATION, {
    async onCompleted(data) {
      client.resetStore().then().catch()
      client.cache.gc()
      const token = data?.userLogin?.auth?.idToken
      const refreshToken = data?.userLogin?.auth?.refreshToken
      if (token) {
        setUserTokens(token, refreshToken)
        router.push(Pages.Video)
        // try {
        //   const userInfo = await client.query({
        //     query: QUERY.GET_USER_INFO,
        //     context: {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        //     },
        //   })
        //   client.mutate({
        //     mutation: MUTATION.SET_LOCAL_SESSION,
        //     variables: {
        //       session: { me: userInfo.data?.user },
        //     },
        //   })
        // } catch (error) {
        //   console.log(
        //     '🚀 ~ file: header.tsx ~ line 77 ~ onCompleted ~ error',
        //     error,
        //   )
        // }
      }
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
      login({
        variables: {
          ...data,
          authProfileId: AUTH_PROFILE_ID,
        },
      })
        .then()
        .catch((e) => console.error(e))
    },
    [login],
  )

  return (
    <Layout title='Log In | WorkReels'>
      <div className='container mx-auto max-w-md md:max-w-xl mt-10 md:mt-20 px-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 lg:p-10 bg-white shadow-lg rounded'
        >
          <h1 className='text-2xl mb-4'>Log In</h1>
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
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              ref={register}
              name='password'
              placeholder='Password'
              type='password'
            />
          </FormControl>

          <Button
            colorScheme='blue'
            mr={3}
            type='submit'
            className='my-6'
            isLoading={loading}
          >
            Submit
          </Button>
          <span className='block italic'>
            Don&apos;t have an account yet?{' '}
            <Link href='/register'>
              <a className='text-blue-600 not-italic font-semibold hover:underline'>
                Sign Up
              </a>
            </Link>
          </span>
        </form>
      </div>
      <BottomNav />
    </Layout>
  )
}

export default Register
