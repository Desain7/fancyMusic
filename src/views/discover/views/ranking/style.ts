import styled from 'styled-components'

export const RankingWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    /* background-image: url(${require('@/assets/img/wrap-bg.png')}); */
    display: flex;
    min-height: 700px;

    > .left {
      background-color: #f9f9f9;
      width: 240px;
    }

    > .right {
      border-left: #eaeaea 1px solid;
      background-color: #ffffff;
      margin-left: 1px;
      width: 740px;
    }
  }
`
