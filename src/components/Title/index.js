import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import style from './style.styl'

const Title = props => {
  const { inline, href, to, children } = props
  console.log(inline)
  const className = classnames(style.title, style[props.type], {
    [style.inline]: inline
  })

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <span className={className}>
      {children}
    </span>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  href: PropTypes.string,
  inline: PropTypes.bool,
  to: PropTypes.string
}

export default Title

