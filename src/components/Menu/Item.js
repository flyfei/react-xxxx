import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.styl'

const Item = props => (
  <Link to={props.href} className={style.item}>
    <span className={style.icon}>
      <i
        className="icon"
        style={{ color: props.color }}
        dangerouslySetInnerHTML={{ __html: props.icon }}
      />
    </span>
    <span className={style.text}>{props.title}</span>
  </Link>
)
Item.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string
}

export default Item
