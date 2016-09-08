import React, { PropTypes } from 'react'
import style from './style.styl'

const Contianer = props => (
  <div className={style.container}>
    {props.children}
  </div>
)
Contianer.propTypes = {
  children: PropTypes.node
}

export default Contianer
