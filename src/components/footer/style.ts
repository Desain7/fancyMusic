import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .content {
    width: 980px;
    margin: 0 auto;
    .enter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 33px;
      .unit:first-child {
        margin-left: 0;
      }
      .unit {
        width: 45px;
        margin-left: 80px;
        text-align: center;
        color: #666;
        .text {
          display: inline-block;
          width: 100px;
          margin-top: 10px;
          margin-left: -27.5px;
          font-weight: 400;
          font-size: 12px;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
        }
        .logo {
          display: block;
          float: none;
          width: 45px;
          height: 45px;
          margin: 0 auto;
          background: url(${require('../../assets/img/foot_enter.png')})
            no-repeat;
          background-size: 220px 220px;
        }

        .logo-openplatform {
          background-position: -170px -5px;
        }
        .logo-openplatform:hover {
          background-position: -5px -115px;
        }
        .logo-trade {
          background-position: -5px -170px;
        }
        .logo-trade:hover {
          background-position: -60px -170px;
        }
        .logo-amped {
          background-position: -5px -60px;
        }
        .logo-amped:hover {
          background-position: -60px -5px;
        }
        .logo-auth {
          background-position: -60px -60px;
        }
        .logo-auth:hover {
          background-position: -115px -5px;
        }
        .logo-musician {
          background-position: -115px -115px;
        }
        .logo-musician:hover {
          background-position: -5px -5px;
        }
        .logo-reward {
          background-position: -170px -115px;
        }
        .logo-reward:hover {
          background-position: -60px -115px;
        }
        .logo-cash {
          background-position: -170px -60px;
        }
        .logo-cash:hover {
          background-position: -115px -60px;
        }
      }
    }
  }
  .config {
    padding-top: 60px;
    line-height: 24px;
    margin: 0 auto;
    text-align: center;
    .line {
      margin: 0 8px 0 8px;
      color: #d9d9d9;
    }
    .item {
      color: #666;
    }
  }
`
