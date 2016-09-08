import React, { PropTypes } from 'react'
import classnames from 'classnames'
import style from './style.styl'

const Col = props => {
  const { xs, sm, md, lg, ...rest } = props
  const [xsSpan, xsOffset] = xs.split('-')
  const [smSpan, smOffset] = sm.split('-')
  const [mdSpan, mdOffset] = md.split('-')
  const [lgSpan, lgOffset] = lg.split('-')

  const className = classnames({
    [style[`offset-xs-${xsOffset}`]]: xsOffset,
    [style[`col-xs-${xsSpan}`]]: xsSpan,

    [style[`offset-sm-${smOffset}`]]: smOffset,
    [style[`col-sm-${smSpan}`]]: smSpan,

    [style[`offset-md-${mdOffset}`]]: mdOffset,
    [style[`col-md-${mdSpan}`]]: mdSpan,

    [style[`offset-lg-${lgOffset}`]]: lgOffset,
    [style[`col-lg-${lgSpan}`]]: lgSpan

  })
  return (
    <div className={className} {...rest}>
      {props.children}
    </div>
  )
}
Col.defaultProps = {
  xs: '',
  sm: '',
  md: '',
  lg: ''
}
Col.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string
}

export default Col
