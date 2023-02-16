import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return (
    <RankingWrapper>
      <div className="content wrap-v2">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
