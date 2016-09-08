import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import * as actionCreators from 'actions/layout'
import { bindActionCreators } from 'redux'
import Menu from 'components/Menu'
import Header from 'components/Header'
import style from './style.styl'

import { Button } from 'antd-mobile'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    thin: PropTypes.bool,
    toggleMenuWidth: PropTypes.func
  }
  handleResize = e => {
    const { toggleMenuWidth, thin } = this.props
    if (window.innerWidth < 993 && !thin) {
      toggleMenuWidth(true)
    }
    if (window.innerWidth > 1439 && thin) {
      toggleMenuWidth(false)
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleClick() {
    console.log('1111')
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>aaaaaaa</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ thin: state.layout.thin })
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
