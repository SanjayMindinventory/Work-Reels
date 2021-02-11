import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { findPage, PageId, useCurrentPageId } from './pages'

interface NavLinkProps {
  className?: string
  id: PageId
}

export const NavLinkMobile: React.FC<NavLinkProps> = (props) => {
  const { id, children, className } = props
  const currentPageId = useCurrentPageId()
  const page = findPage(id)

  if (!page) {
    return null
  }

  return (
    <Link as={page.pathname} href={page.pathname}>
      <a
        className={cn([
          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6',
          {
            'bg-indigo-50 border-indigo-500 text-indigo-700':
              currentPageId === page.id,
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700':
              currentPageId !== page.id,
          },
          className,
        ])}
      >
        {children}
      </a>
    </Link>
  )
}

export const NavLinkDesktop: React.FC<NavLinkProps> = (props) => {
  const { id, children, className } = props
  const currentPageId = useCurrentPageId()
  const page = findPage(id)

  if (!page) {
    return null
  }

  return (
    <Link as={page.pathname} href={page.pathname}>
      <a
        className={cn([
          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
          {
            'border-indigo-500 text-gray-900 ': currentPageId === page.id,
            'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
              currentPageId !== page.id,
          },
          className,
        ])}
      >
        {children}
      </a>
    </Link>
  )
}
