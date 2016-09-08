import React, { Component } from 'react'
import { Button } from 'antd-mobile'

class Index extends Component {
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
export default Index
