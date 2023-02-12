import { RouteObject, Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

// 配置路由懒加载
const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/views/recommend'))
const Ranking = lazy(() => import('@/views/discover/views/ranking'))
const Songs = lazy(() => import('@/views/discover/views/songs'))
const Djradio = lazy(() => import('@/views/discover/views/djradio'))
const Artist = lazy(() => import('@/views/discover/views/artist'))
const Album = lazy(() => import('@/views/discover/views/album'))

const Personal = lazy(() => import('@/views/personal'))
const Download = lazy(() => import('@/views/download'))
const Follow = lazy(() => import('@/views/follow'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/personal',
    element: <Personal />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/follow',
    element: <Follow />
  }
]

export default routes
