import React, { memo, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useLogout, useUserSession } from 'utils/hooks'
// import useHover from 'utils/useHover'
import { useHover } from 'use-events'
import Link from 'next/link'
import { Popover } from 'components/popover/Popover'
import { Pages } from 'components/nav/pages'
import { CreateVideoPopup } from './new-video-popup'

/* eslint-disable react/display-name */
export const UserInfo: React.FC = memo(() => {
  const userInfo = useUserSession()
  const router = useRouter()
  const logout = useLogout()

  // const wrapperRef = useRef()
  // const popperRef = useRef(null)
  // const { styles, attributes } = usePopper(
  //   wrapperRef.current,
  //   popperRef.current,
  //   {
  //     placement: 'bottom',
  //     modifiers: [
  //       {
  //         name: 'offset',
  //         enabled: true,
  //         options: {
  //           offset: [0, 20],
  //         },
  //       },
  //     ],
  //   },
  // )
  // const [hoverRef, isHovered] = useHover()
  const [active, bind] = useHover()

  const goToCreateVideo = useCallback(() => {
    router.push(Pages.VideoCreate)
  }, [router])

  const avatar = useMemo(() => userInfo?.avatar?.downloadUrl, [userInfo])
  const userFirstName = userInfo?.firstName
  const userLastInitial = userInfo?.lastName[0]

  if (!userInfo) {
    return null
  }

  const initRef = React.useRef()

  const renderTarget = useCallback((openPopover: () => void) => {
    return (
      <button
        className='bg-white rounded-full flex items-center text-sm ml-4 focus:outline-none'
        id='user-menu'
        aria-haspopup='true'
        onClick={openPopover}
      >
        <img className='h-10 w-10 rounded-full mr-2' src={avatar} />
        <span className='text-lg font-semibold mr-2'>
          {userFirstName} {userLastInitial}.
        </span>
        <span className='sr-only'>Open user menu</span>
      </button>
    )
  }, [])

  const renderChild = useCallback(
    (closePopover: () => void) => (
      <div
        className='origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 text-right'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        {/* <Link href='/profile'>
          <a
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Your Profile
          </a>
        </Link>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          role='menuitem'
        >
          Company
        </a>
        <Link href={Pages.Worker}>
          <a
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Workers
          </a>
        </Link> */}
        <a
          onClick={logout}
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-semibold'
          role='menuitem'
        >
          Sign out
        </a>
      </div>
    ),
    [],
  )

  return (
    <div className='flex'>
      <div className='flex-shrink-0'>
        <CreateVideoPopup />
      </div>
      <div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
        {/* <button className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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

        <Popover position='bottom-end' usePortal target={renderTarget}>
          {renderChild}
        </Popover>

        {/* <Popover
          placement='bottom-start'
          closeOnEsc
          initialFocusRef={initRef as any}
        >
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <button
                  className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  id='user-menu'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img className='h-10 w-10 rounded-full mr-2' src={avatar} />
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  className='max-w-24'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <Link href='/profile'>
                    <a
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Your Profile
                    </a>
                  </Link>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </a>
                  <a
                    onClick={logout}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover> */}
      </div>
    </div>
  )
})
