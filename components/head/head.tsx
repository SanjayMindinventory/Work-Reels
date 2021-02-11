/* eslint-disable */
import NextHead from 'next/head'
import React from 'react'

interface Props {
  title?: string
  description?: string
}

export const Head: React.FC<Props> = (props) => {
  const { title, description, children } = props
  const titleValue = title || 'WorkReels'

  return (
    <NextHead>
      {children}
      <title>{titleValue}</title>
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
      />
    </NextHead>
  )
}
