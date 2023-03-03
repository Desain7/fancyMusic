import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = () => {
  const { topList } = useAppSelector(
    (state) => ({
      topList: state.ranking.topList
    }),
    shallowEqualApp
  )
  console.log('data', topList)
  return (
    <RankingListWrapper>
      <div className="ranking-list">
        <h2 className="cloud-sp">云音乐特色榜</h2>
        <ul className="ranking-ul">
          {topList.slice(0, 4).map((item, index) => {
            return (
              <li className="ranking-item" key={item.id}>
                <div className="item">
                  <div className="left">
                    <a href="" className="avatar">
                      <img src={item.coverImgUrl} alt="" />
                    </a>
                  </div>
                  <div className="right">
                    <div className="name">{item.name}</div>
                    <div className="time">{item.updateFrequency}</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <h2 className="global-media">全球媒体榜</h2>
        <ul className="ranking-ul">
          {topList.slice(4).map((item, index) => {
            return (
              <li className="ranking-item" key={item.id}>
                <div className="item">
                  <div className="left">
                    <a href="" className="avatar">
                      <img src={item.coverImgUrl} alt="" />
                    </a>
                  </div>
                  <div className="right">
                    <div className="name">{item.name}</div>
                    <div className="time">{item.updateFrequency}</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
