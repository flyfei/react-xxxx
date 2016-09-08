import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import style from './style.styl'

const Tag = props => {
  if (props.href) {
    return (
      <a className={classnames(style.tag, style[props.type])} href={props.href}>
        {props.children}
      </a>
    )
  }
  if (props.to) {
    return (
      <Link to={props.to} className={classnames(style.tag, style[props.type])}>
        {props.children}
      </Link>
    )
  }
  return (
    <span className={classnames(style.tag, style[props.type])}>
      {props.children}
    </span>
  )
}

Tag.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string
}

export default Tag

