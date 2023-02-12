import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './comps/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      {/* 展示二级路由 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
