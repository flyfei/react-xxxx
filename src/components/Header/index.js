import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import style from './style.styl'

const Header = props => (
  <header className={classnames(style.header, { [style.thin]: props.thin })}>
    <nav className={style.left}>
      <Link className={style['nav-link']} to="#">我的站点</Link>
      <Link className={style['nav-link']} to="#">官方社区</Link>
      <Link className={style['nav-link']} to="#">用户中心</Link>
    </nav>
    <nav className={style.right}>
      <img src={props.avatar} className={style.avatar} />
      <Link className={style['nav-link']} to="#">
        下午好, yinzhong@goyoo.com
        <i className="caret" />
      </Link>
    </nav>
  </header>
)
Header.propTypes = {
  avatar: PropTypes.string,
  thin: PropTypes.bool
}
Header.defaultProps = {
  avatar: 'https://avatars1.githubusercontent.com/u/12208108?v=3&s=40'
}

export default Header
