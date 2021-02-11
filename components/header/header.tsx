import React, { memo, useCallback, useMemo } from 'react'
import NextLink from 'next/link'
import { useApolloClient, useMutation } from '@apollo/client'
import {
  Avatar,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  useToast,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MUTATION } from 'lib/graphql'
import { useForm } from 'react-hook-form'
import { AUTH_PROFILE_ID } from 'lib/constants'
import cn from 'classnames'
import { setUserTokens, useLogout, useUserSession } from 'utils/hooks'
import { NavLinkDesktop, NavLinkMobile } from '../nav/nav-link'
import { PageId } from 'components/nav/pages'
import { UserInfo } from './user-info'

interface HeaderProps {
  getMeLoading: boolean
  refetch?: any
}

type Inputs = {
  email: string
  password: string
}

export const Header: React.FC<HeaderProps> = memo((props) => {
  const { getMeLoading, refetch } = props
  const toast = useToast()
  const initialRef: any = React.useRef()
  const { register, handleSubmit } = useForm<Inputs>()
  const logout = useLogout()

  const userInfo = useUserSession()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenNav, onToggle: onToggleNav } = useDisclosure()

  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(MUTATION.LOGIN_MUTATION, {
    async onCompleted(data) {
      client.resetStore().then().catch()
      client.cache.gc()
      const token = data?.userLogin?.auth?.idToken
      const refreshToken = data?.userLogin?.auth?.refreshToken
      if (token) {
        setUserTokens(token, refreshToken)
        refetch &&
          refetch({
            variables: {},
          })

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
      onClose()
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
    (data) => {
      login({
        variables: {
          ...data,
          authProfileId: AUTH_PROFILE_ID,
        },
      })
    },
    [login],
  )

  const renderUserBlock = useMemo(() => {
    if (userInfo) {
      return <UserInfo />
    }
    if (getMeLoading) {
      return (
        <div className='flex items-center'>
          <SkeletonText
            mt='2'
            noOfLines={2}
            spacing='2'
            className='w-12 inline mr-4'
          />
          <SkeletonCircle size='10' />
        </div>
      )
    }
    return (
      <div className='flex items-center'>
        <NextLink href='/register'>
          <a>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 mr-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <svg
                className='-ml-1 mr-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Register</span>
            </button>
          </a>
        </NextLink>
        <NextLink href='/login'>
          <button
            type='button'
            // onClick={onOpen}
            className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span>Login</span>
          </button>
        </NextLink>
      </div>
    )
  }, [getMeLoading, userInfo])

  return (
    <>
      <nav className='hidden md:block g-white shadow'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='-ml-2 mr-2 flex items-center hidden'>
                <button
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  aria-expanded='false'
                  onClick={onToggleNav}
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className={cn([
                      'h-6 w-6',
                      {
                        block: !isOpenNav,
                        hidden: isOpenNav,
                      },
                    ])}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                  <svg
                    className={cn([
                      'h-6 w-6',
                      {
                        block: isOpenNav,
                        hidden: !isOpenNav,
                      },
                    ])}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='flex-shrink-0 flex items-center'>
                <NextLink href='/'>
                  <a>
                    {/* <Image
                      className='block lg:hidden h-8 w-auto'
                      src='/images/wr-logo.png'
                      width={300}
                      height={200}
                      alt='Workflow'
                    /> */}
                    <h1>
                      <svg
                        className='w-48 fill-current text-blue-600'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 522.87 80.74'
                      >
                        <g id='Layer_2' data-name='Layer 2'>
                          <g id='Layer_1-2' data-name='Layer 1'>
                            <polyline
                              className='cls-1'
                              points='252.27 43.59 252.27 79.73 262.15 79.73 262.15 53.47 284.45 53.47 298.44 79.81 310.07 79.81 290.88 43.59'
                            />
                            <path
                              className='cls-1'
                              d='M312.81,11.73l-2.49,1.56c-.13-.44-.26-.87-.42-1.27a16.15,16.15,0,0,0-3.45-5.39,18.91,18.91,0,0,0-6.84-4.14A27.51,27.51,0,0,0,290.21,1H252.27V37.14h37.94a27.72,27.72,0,0,0,9.4-1.48,18.93,18.93,0,0,0,6.84-4.15,16.11,16.11,0,0,0,3.45-5.38c.16-.4.29-.84.42-1.28l2.49,1.56,12.71,7.34V4.4ZM298,25.84q-3,2.39-8.63,2.38H262.15V9.92h27.21c3.72,0,6.6.79,8.63,2.39a8.46,8.46,0,0,1,3.09,6.76A8.49,8.49,0,0,1,298,25.84Z'
                            />
                            <path
                              className='cls-2'
                              d='M158,63.81a27.24,27.24,0,0,1-14.21,14.73A26,26,0,0,1,133,80.74a25.66,25.66,0,0,1-10.72-2.2,27.6,27.6,0,0,1-8.47-5.9A26.7,26.7,0,0,1,108.2,64a27.6,27.6,0,0,1-2-10.47v-.2a27.6,27.6,0,0,1,2-10.47,27.18,27.18,0,0,1,14.21-14.72A26.07,26.07,0,0,1,133.18,26a25.75,25.75,0,0,1,10.73,2.21,27.39,27.39,0,0,1,8.46,5.9A26.49,26.49,0,0,1,158,42.68a27.39,27.39,0,0,1,2,10.46v.21A27.39,27.39,0,0,1,158,63.81Zm-3.33-10.46A23.63,23.63,0,0,0,153,44.51a22.06,22.06,0,0,0-4.59-7.2,21.34,21.34,0,0,0-6.91-4.8,21.27,21.27,0,0,0-23.92,4.85,22,22,0,0,0-4.43,7.1,23.72,23.72,0,0,0-1.6,8.68v.21a23.58,23.58,0,0,0,1.65,8.83,22.06,22.06,0,0,0,4.59,7.2,21.23,21.23,0,0,0,15.41,6.54,20.55,20.55,0,0,0,8.61-1.79,21.09,21.09,0,0,0,6.81-4.8,21.71,21.71,0,0,0,4.43-7.1,23.68,23.68,0,0,0,1.6-8.68Z'
                            />
                            <path
                              className='cls-2'
                              d='M194.37,31.9a22.52,22.52,0,0,0-8.62,1.69,20.7,20.7,0,0,0-7.24,5,24.66,24.66,0,0,0-5,8.21,31.65,31.65,0,0,0-1.85,11.24V79.51h-5V27.18h5V42.06a29.87,29.87,0,0,1,3.9-6.46,25.39,25.39,0,0,1,5.34-5.08,22.39,22.39,0,0,1,6.51-3.18,23.19,23.19,0,0,1,7.44-1V31.9Z'
                            />
                            <path
                              className='cls-2'
                              d='M238.85,79.51,218.13,54,205.4,66.79V79.51h-5V4.61h5V60.74l32.43-33.56h6.67L221.62,50.37l23.59,29.14Z'
                            />
                            <path
                              className='cls-2'
                              d='M335.32,64.08A22.59,22.59,0,0,0,340,70.51a19,19,0,0,0,6.33,4,20.41,20.41,0,0,0,7.46,1.38,21.37,21.37,0,0,0,10.44-2.36,30.5,30.5,0,0,0,7.56-5.85l3.49,3.08a36.46,36.46,0,0,1-9.1,7.13,25.68,25.68,0,0,1-12.59,2.82,25.27,25.27,0,0,1-9.82-1.95,24.69,24.69,0,0,1-8.23-5.54,26,26,0,0,1-5.61-8.62,29.29,29.29,0,0,1-2.05-11.18v-.21a29.68,29.68,0,0,1,1.89-10.62A27.46,27.46,0,0,1,335,34a24.83,24.83,0,0,1,7.85-5.84A22.52,22.52,0,0,1,352.66,26a22.87,22.87,0,0,1,9.95,2.1,22.59,22.59,0,0,1,7.54,5.8A26.32,26.32,0,0,1,375,42.52a33.41,33.41,0,0,1,1.7,10.83v1.13a6.23,6.23,0,0,1-.11.92h-43.4A23,23,0,0,0,335.32,64.08Zm36-13.2a30.27,30.27,0,0,0-1.59-7.64,21.13,21.13,0,0,0-3.61-6.46,17.17,17.17,0,0,0-5.71-4.52,18.74,18.74,0,0,0-15.22-.15,18,18,0,0,0-5.92,4.26,22.78,22.78,0,0,0-4.16,6.46,24.2,24.2,0,0,0-2,8.05Z'
                            />
                            <path
                              className='cls-2'
                              d='M390.85,64.08a22.21,22.21,0,0,0,4.63,6.43,19.09,19.09,0,0,0,6.32,4,20.45,20.45,0,0,0,7.46,1.38,21.32,21.32,0,0,0,10.44-2.36,30.73,30.73,0,0,0,7.57-5.85l3.48,3.08a36.41,36.41,0,0,1-9.09,7.13,25.69,25.69,0,0,1-12.6,2.82,25.27,25.27,0,0,1-9.82-1.95A24.89,24.89,0,0,1,391,73.25a26.17,26.17,0,0,1-5.6-8.62,29.1,29.1,0,0,1-2.06-11.18v-.21a29.47,29.47,0,0,1,1.9-10.62A27.44,27.44,0,0,1,390.48,34a24.83,24.83,0,0,1,7.85-5.84A22.52,22.52,0,0,1,408.18,26a22.87,22.87,0,0,1,9.95,2.1,22.63,22.63,0,0,1,7.55,5.8,26.5,26.5,0,0,1,4.82,8.67,33.41,33.41,0,0,1,1.69,10.83v1.13a5.91,5.91,0,0,1-.1.92h-43.4A22.59,22.59,0,0,0,390.85,64.08Zm36-13.2a29.85,29.85,0,0,0-1.6-7.64,21.31,21.31,0,0,0-3.6-6.46A17.27,17.27,0,0,0,416,32.26a18.77,18.77,0,0,0-15.23-.15,18.09,18.09,0,0,0-5.91,4.26,23,23,0,0,0-4.17,6.46,24,24,0,0,0-1.95,8.05Z'
                            />
                            <path
                              className='cls-2'
                              d='M441.72,79.51V4.61h5v74.9Z'
                            />
                            <path
                              className='cls-2'
                              d='M491.36,71.58a14.26,14.26,0,0,1-3.85,4.81,17.71,17.71,0,0,1-5.75,3.07,22.54,22.54,0,0,1-7.08,1.08,32.66,32.66,0,0,1-11.49-2.15,35.22,35.22,0,0,1-9.95-5.55l3-4a36.31,36.31,0,0,0,9,5.08,27.17,27.17,0,0,0,9.75,1.8,14.78,14.78,0,0,0,9-2.67,8.51,8.51,0,0,0,3.64-7.27v-.2a6.63,6.63,0,0,0-1.13-3.89,10.36,10.36,0,0,0-3.07-2.87,20.23,20.23,0,0,0-4.42-2q-2.46-.81-5.23-1.64-3.18-.91-6.41-1.94a25.46,25.46,0,0,1-5.8-2.61,13.39,13.39,0,0,1-4.15-3.94,10.14,10.14,0,0,1-1.6-5.84v-.21a12.87,12.87,0,0,1,1.29-5.78,14.19,14.19,0,0,1,3.54-4.56,16.18,16.18,0,0,1,5.44-3,21.5,21.5,0,0,1,7-1.07,32.06,32.06,0,0,1,9.7,1.57A32.86,32.86,0,0,1,491.61,32L489,36.21a34.61,34.61,0,0,0-7.75-3.79A25.39,25.39,0,0,0,472.84,31q-5.44,0-8.67,2.61a8,8,0,0,0-3.23,6.5v.21A5.91,5.91,0,0,0,462.17,44a10.48,10.48,0,0,0,3.23,2.72,25.81,25.81,0,0,0,4.67,2c1.77.58,3.59,1.15,5.44,1.69,2.11.62,4.2,1.28,6.25,2a23.15,23.15,0,0,1,5.54,2.77,13.83,13.83,0,0,1,4,4,10.73,10.73,0,0,1,1.48,5.84v.2A14.14,14.14,0,0,1,491.36,71.58Z'
                            />
                            <polygon
                              className='cls-2'
                              points='83.32 59.86 62.26 34.21 54.09 34.21 33.03 59.86 11.89 0 0 0 28.65 79.51 36.97 79.51 57.95 50.83 78.94 79.51 87.26 79.51 115.91 0 104.46 0 83.32 59.86'
                            />
                            <polygon
                              className='cls-2'
                              points='504.88 22.22 508.92 22.22 508.92 19.22 497.87 19.22 497.87 22.22 501.88 22.22 501.88 32.22 504.88 32.22 504.88 22.22'
                            />
                            <polygon
                              className='cls-2'
                              points='514.88 24.34 517.38 25.78 519.88 24.34 519.88 32.22 522.88 32.22 522.88 19.19 520.7 19.19 517.38 22.6 514.05 19.19 511.88 19.19 511.88 32.22 514.88 32.22 514.88 24.34'
                            />
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </a>
                </NextLink>
                {/* <NextLink href='/'>
                  <a className='hidden lg:block'>
                    <Image
                      className='hidden lg:block h-8 w-auto'
                      src='/images/wr-logo.png'
                      width={300}
                      height={200}
                      alt='Workflow'
                    />
                    WorkReels
                  </a>
                </NextLink> */}
              </div>
              <div className='hidden md:ml-8 md:flex md:space-x-8'>
                {userInfo?.email && (
                  <>
                    <NavLinkDesktop
                      className='text-xl font-semibold'
                      id={PageId.Videos}
                    >
                      Videos
                    </NavLinkDesktop>
                    <NavLinkDesktop
                      className='text-xl font-semibold'
                      id={PageId.Projects}
                    >
                      Projects
                    </NavLinkDesktop>
                  </>
                )}
              </div>
            </div>
            <div className='flex items-center'>{renderUserBlock}</div>
          </div>
        </div>

        {/* mobile-nav */}
        <div
          className={cn([
            'md:hidden',
            {
              block: isOpenNav,
              hidden: !isOpenNav,
            },
          ])}
        >
          {userInfo?.email ? (
            <>
              <div className='pt-2 pb-3 space-y-1'>
                <NavLinkMobile id={PageId.Videos}>Videos</NavLinkMobile>
                <NavLinkMobile id={PageId.Projects}>Projects</NavLinkMobile>
              </div>
              <div className='pt-4 pb-3 border-t border-gray-200'>
                <div className='flex items-center px-4 sm:px-6'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={userInfo?.avatar?.downloadUrl}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-gray-800'>
                      {userInfo?.firstName} {userInfo?.lastName}
                    </div>
                    <div className='text-sm font-medium text-gray-500'>
                      {userInfo?.email}
                    </div>
                  </div>
                  {/* <button className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='sr-only'>View notifications</span>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </button> */}
                </div>
                <div className='mt-3 space-y-1'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                  >
                    Settings
                  </a>
                  <a
                    onClick={logout}
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </>
          ) : props.getMeLoading ? (
            <>
              <SkeletonText
                mt='2'
                noOfLines={2}
                spacing='2'
                className='w-12 inline mr-4'
              />
              <SkeletonCircle size='10' />
            </>
          ) : (
            <div className='mt-3 space-y-1'>
              <p className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'>
                You&apos;re not log in yet
              </p>
            </div>
          )}
        </div>
      </nav>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent className='max-w-xs md:max-w-md md:mt-24'>
            <ModalHeader>Sign in</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody pb={6}>
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
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme='blue'
                  mr={3}
                  type='submit'
                  isLoading={loading}
                >
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
})
