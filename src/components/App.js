import React from 'react'
import Avatar from './Avatar'
import image from '../assets/wechat.jpeg'
import Badge from './Badge'
// Avatar
function Tx() {
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

function App() {
  return (
    <Badge
      value={100}
      max={99}
      type={'danger'}
      dot={false}
      offset={{top: '0', right: '0'}}
    >
      <Tx />
    </Badge>
  )
}

export default App
