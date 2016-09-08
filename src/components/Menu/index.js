import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import style from './style.styl'
import Item from './Item'
import Children from './Children'

export default class Menu extends Component {
  static propTypes = {
    tree: PropTypes.array,
    thin: PropTypes.bool,
    toggleMenuWidth: PropTypes.func
  }
  static defaultProps = {
    tree: [
      {
        title: '我的站点',
        children: [
          { icon: '&#xe601;', href: '/l-1', title: 'APP' },
          { icon: '&#xe620;', href: '/l-1', title: '移动站' },
          { icon: '&#xe60f;', href: '/l-1', title: 'PC站' },
          { icon: '&#xe60a;', href: '/l-1', title: '内容管理' }
        ]
      },
      { icon: '&#xe600;', href: '/l-1', title: '问答', color: '#c42048' },
      { icon: '&#xe60c;', href: '/l-1', title: '直播', color: '#367cab' },
      { icon: '&#xe61e;', href: '/l-1', title: '话题', color: '#6f9e3e' },
      { icon: '&#xe609;', href: '/l-1', title: '游戏', color: '#dfd437' },
      {
        title: '互动推广',
        children: [
          { icon: '&#xe60e;', href: '/children-111', title: '微社区' },
          { icon: '&#xe619;', href: '/children-111', title: '单页' }
        ]
      },
      {
        title: '服务',
        children: [
          { icon: '&#xe618;', href: '/children-111', title: '小云商城' },
          { icon: '&#xe603;', href: '/children-111', title: '云服务' },
          { icon: '&#xe621;', href: '/children-111', title: '应用市场' },
          { icon: '&#xe617;', href: '/children-111', title: '站点设置' }
        ]
      }
    ]
  }
  _handleWheel = e => {
    // e.preventDefault()
  }
  render() {
    const { toggleMenuWidth, tree } = this.props
    return (
      <nav className={classnames(style.menu, { [style.thin]: this.props.thin })}>
        <div className={style.logo}>
          <h1>logo</h1>
        </div>
        <div className={style.switch} onClick={() => toggleMenuWidth()} >
          <span />
          <span />
          <span />
        </div>
        <div className={style.scroller} onWheel={this._handleWheel}>
          {tree.map((item, index) => item.children
            ? <Children {...item} key={index} />
            : <Item {...item} key={index} />
          )}
        </div>
      </nav>
    )
  }
}

