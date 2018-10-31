import './index.less'

import React from 'react'
import classnames from 'classnames'

// value     number | string
// max       number
// type      primary | success | warning | danger | gray
// dot       boolean
// offset    {top: string, right: string}

function Badge(props) {
  const { value, max, type = 'danger', dot = false, offset = {}, children } = props

  const text = typeof value === 'number' 
    ? ( value > max ? max + '+' : value > 0 ? value : '' )
    : value.trim()
  
  const el = dot
    ? <span className="bui-badge__dot" style={offset}></span>
    : text 
    ? <span className="bui-badge__count" style={offset}>{text}</span>
    : null
  
  const className = classnames(
    'bui-badge',
    `bui-badge--${type}`,
    {dot, float: !!children}
  )
  return (
    <span className={className}>
      {children}
      {el}
    </span>
  )
}

export default Badge
