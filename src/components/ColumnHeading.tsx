import React, { ComponentPropsWithoutRef, FC } from 'react'

export const ColumnHeading: FC<ComponentPropsWithoutRef<'h2'>> = ({
  children,
  ...rest
}) => {
  return (
    <h2 className="mb-3 ml-3 text-lg font-medium dark:text-gray-300" {...rest}>
      {children}
    </h2>
  )
}
