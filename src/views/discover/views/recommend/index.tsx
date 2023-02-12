import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchRankingDataAction,
  // fetchBannerDataAction,
  // fetchHotRecommendAction,
  // fetchNewAlbumAction
  fetchRecommendDataAction
} from './store/recommend'
import TopBanner from './comps/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './comps/hot-recommend'
import NewAlbum from './comps/new-album'
import TopRanking from './comps/top-ranking'
import UserLogin from './comps/user-login'
import SettleSinger from './comps/settle-singer'
import HotAnchor from './comps/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
  }, [])

  /** render函数的返回jsx */
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
