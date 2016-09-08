import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import style from './style.styl'

const Button = props => {
  const { loading, children, type, to, href, ...rest } = props
  const className = classnames(style[type], style.button, { [style.loading]: loading })
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {loading && <i className={classnames('icon', style.icon)}>&#xe610;</i>}
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {loading && <i className={classnames('icon', style.icon)}>&#xe610;</i>}
        {children}
      </a>
    )
  }
  return (
    <button className={className} {...rest}>
      {loading && <i className={classnames('icon', style.icon)}>&#xe610;</i>}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool
}

export default Button
