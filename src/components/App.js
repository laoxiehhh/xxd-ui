import React from 'react'
import Avatar from './Avatar'
import image from '../assets/wechat.jpeg'

function App() {
  const radius = 'square'
  const size = 'large'
  const src = image
  const title = 'hello'
  return (
    <div>
      <Avatar 
        radius={radius}
        size={size}
        src={src}
        title={title}  
      />
    </div>
  )
}

export default App
