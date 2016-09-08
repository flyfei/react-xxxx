import React, { PropTypes } from 'react'
import style from './style.styl'

const Row = props => (
  <div className={style.row} {...props}>
    {props.children}
  </div>
)
Row.propTypes = {
  children: PropTypes.node
}

export default Row
