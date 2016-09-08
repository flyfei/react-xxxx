import React, { Component, PropTypes } from 'react'
import { presets } from 'react-motion'
import Collapse from 'react-collapse'
import classnames from 'classnames'
import Item from './Item'
import style from './style.styl'

export default class Children extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.array
  }
  state = {
    toggle: false
  }
  _toggleChildren = () => {
    const { toggle } = this.state
    this.setState({
      toggle: !toggle
    })
  }
  render() {
    const { title, children } = this.props
    const { toggle } = this.state
    return (
      <section>
        <span className={style.item} onClick={this._toggleChildren}>
          <span className={classnames(style.icon, { [style.roate]: !toggle })}>
            <i className="caret" />
          </span>
          <span className={style.text}>{title}</span>
        </span>
        <Collapse isOpened={toggle} springConfig={presets.stiff}>
          {children.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </Collapse>
      </section>
    )
  }
}

