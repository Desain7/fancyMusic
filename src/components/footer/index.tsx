import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const footer: FC<IProps> = () => {
  return <div>footer</div>
}

export default memo(footer)
