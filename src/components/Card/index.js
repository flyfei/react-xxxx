import React, { PropTypes } from 'react'
import classnames from 'classnames'
import style from './style.styl'

const Card = props => {
  const { type, icon, children, ...rest } = props
  return (
    <div className={classnames(style[type], style.card)} {...rest}>
      {children}
      <i
        className={classnames('icon', style.icon)}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  icon: PropTypes.string
}

export default Card

