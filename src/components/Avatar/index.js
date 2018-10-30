import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.less'

// radius      number | square | circle
// size        small | normal | circle          normal
// src         string 
// title       string

export default class Avatar extends Component {
  static propTypes = {
    radius: PropTypes.string,
    size: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string
  }
  static defaultProps = {
    src: '',
    size: 'normal'
  }
  render() {
    const { src, title, radius, size } = this.props
    const className = classnames(
      'bui-avatar',
      `bui-avatar--${size}`
    )
    const borderRadius = radius !== undefined && (
      radius === 'square'
        ? '0px'
        : radius === 'circle'
          ? '9999px'
          : radius + 'px'
    )
    return (
      <div
        className={className}
        style={{borderRadius}}
        title={title}
      >
        {src && <img className='bui-avatar__img' src={src} alt={title}/>}
      </div>
    )
  }
}
