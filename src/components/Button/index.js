import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

// text    string
// size    small | normal | large    normal
// type    default | plain | primary | success | warning | danger | white | black      default
// nativeType     button | submit | reset        button
// basic    boolean
// disabled    boolean
// loading     boolean
// full        boolean
// radius      number | square | circle
// onClick     function
export default class Buttom extends Component {

  static defaultProps = {
    size: 'normal',
    type: 'default',
    nativeType: 'button',
    basic: false,
    disabled: false,
    loading: false,
    full: false
  }
  constructor(props) {
    super(props)
    this.state = {
      loading: !!props.loading
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loading !== prevState.loadging) {
      return {
        loading: !!nextProps.loading
      }
    }
  }
  render() {
    const { text, size, type, nativeType, basic, disabled, full, radius, onClick } = this.props
    const borderRadius = radius !== undefined && (
      radius === 'suqare' 
        ? '0px'
        : radius === 'circle'
        ? '9999px'
        : radius + 'px'
    )

    const className = classnames(
      'bui-button',
      `bui-button--${size}`,
      `bui-button--${type}`,
      {
        'bui-button--basic': !!basic,
        'bui-button--disabled': !!disabled,
        'bui-button--loading': this.state.loading,
        'bui-button--full': !!full
      },
      
    )
    return (
      <button 
        className={className}
        type={nativeType}
        style={{borderRadius}}
        disabled={!!disabled || this.state.loading}
        onClick={onClick}
      >
        {this.state.loading ? 'loading' : text}
      </button>
    )
  }
}
