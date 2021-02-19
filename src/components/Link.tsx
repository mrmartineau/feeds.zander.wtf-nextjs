import React, { ComponentPropsWithoutRef, FC } from 'react'
import { simpleUrl } from '../simpleUrl'

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  url: string
  title: string
  subtitle: string
}

export const Link: FC<LinkProps> = ({ url, title, subtitle, ...rest }) => {
  return (
    <a
      href={url}
      className="transition-colors duration-200 relative block hover:text-gray-900 text-gray-700 hover:bg-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded"
      tabIndex={0}
      {...rest}
    >
      {title}
      <br />
      <span className="text-sm text-gray-400">{subtitle}</span>
    </a>
  )
}
