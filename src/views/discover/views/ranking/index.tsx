import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchRankingDataAction } from './store/ranking'
import RankingList from './comps/ranking-list'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <RankingWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <RankingList></RankingList>
        </div>
        <div className="right"></div>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
