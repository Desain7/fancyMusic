import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return <div>discover</div>
}

export default memo(Discover)
