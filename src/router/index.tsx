import { RouteObject } from 'react-router-dom'
import React from 'react'

import Discover from '@/views/discover'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Discover />
  }
]

export default routes
