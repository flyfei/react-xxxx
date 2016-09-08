import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import style from './style.styl'

const List = props => {
  const { type, list } = props
  return (
    <ul className={classnames(style.list, style[type])}>
      {list.map((item, index) =>
        <li key={index}>
          {item.to && <Link className={style.item} to={item.to}>{item.title}</Link>}
          {item.href && <a className={style.item} href={item.href}>{item.title}</a>}
          {!item.to && !item.href && <span className={style.item}>{item.title}</span>}
        </li>
      )}
    </ul>
  )
}

List.defaultProps = {
  list: [
    { title: '划船不用桨', to: '/' },
    { title: '杨帆没风向', href: '/' },
    { title: '我的这一生' },
    { title: '一直都靠浪' }
  ]
}
List.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string
}

export default List

