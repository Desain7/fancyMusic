import styled from 'styled-components'

export const RankingListWrapper = styled.div`
  .ranking-list {
    margin-top: 40px;
    .cloud-sp {
    }
    .global-media {
      margin-top: 20px;
    }
    ul * {
      cursor: pointer;
      vertical-align: middle;
    }
    h2 {
      padding: 0 10px 12px 15px;
      font-size: 14px;
      color: #000;
    }
    .ranking-item {
      position: relative;
      zoom: 1;
      height: 62px;
      padding: 10px 0 10px 20px;
      &:hover {
        background-color: #f4f2f2;
      }
      .item {
        padding-left: 50px;
        .left {
          display: inline;
          float: left;
          margin-left: -50px;
          overflow: hidden;
          width: 40px;
          .avatar {
            display: block;
            position: relative;
            width: 40px;
            height: 40px;
            img {
              width: 40px;
              height: 40px;
            }
          }
        }
        .right {
          .name {
            width: 150px;
            overflow: hidden;
            margin-top: 2px;
            margin-bottom: 8px;
            white-space: nowrap;
          }
          .time {
            color: #999;
          }
        }
      }
    }
  }
`
