import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const footer: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="content">
        <ul className="enter">
          <li className="unit">
            <a
              className="logo logo-openplatform"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">音乐开放平台</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-trade"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">云村交易所</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-amped"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">Amped Studio</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-auth"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">用户认证</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-musician"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">音乐交易平台</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-reward"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">赞赏</span>
          </li>
          <li className="unit">
            <a
              className="logo logo-cash"
              href="https://web-amped.music.163.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="text">视频激励</span>
          </li>
        </ul>
        <div className="config">
          <p className="link" id="music-link">
            <a
              href="//st.music.163.com/official-terms/service"
              target="_blank"
              className="item "
              rel="noreferrer"
            >
              服务条款
            </a>
            <span className="line">|</span>
            <a
              href="//st.music.163.com/official-terms/privacy"
              target="_blank"
              className="item "
              rel="noreferrer"
            >
              隐私政策
            </a>
            <span className="line">|</span>
            <a
              href="//st.music.163.com/official-terms/children"
              target="_blank"
              className="item "
              rel="noreferrer"
            >
              儿童隐私政策
            </a>
            <span className="line">|</span>
            <a
              href="//music.163.com/st/staticdeal/complaints.html"
              target="_blank"
              className="item "
              rel="noreferrer"
            >
              版权投诉
            </a>
            <span className="line">|</span>
            <a
              href="http://ir.music.163.com"
              target="_blank"
              className="item "
              rel="noreferrer"
            >
              投资者关系
            </a>
            <span className="line">|</span>
            <a
              href="https://music.163.com/ui/resource"
              target="_blank"
              className="item "
              rel="noopener noreferrer"
            >
              广告合作
            </a>
            <span className="line">|</span>
            <a
              href="https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station"
              target="_blank"
              className="item"
              rel="noreferrer"
            >
              联系我们
            </a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(footer)
