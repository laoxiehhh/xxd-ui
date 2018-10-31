import React from 'react'
import Avatar from './Avatar'
import image from '../assets/wechat.jpeg'
import Badge from './Badge'
import Button from './Button'
// Avatar
function Avatar1() {
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

function Badge1() {
  return (
    <Badge
      value={100}
      max={99}
      type={'danger'}
      dot={false}
      offset={{top: '0', right: '0'}}
    >
      <Avatar1 />
    </Badge>
  )
}

function App() {
  return (
    <Button 
      text={'点击'}
      size={'large'}
      type={'warning'}
      basic={true}
      // disabled
      loading={false}
      radius={'circle'}
      onClick={() => console.log(123)}
    />
  )
}

export default App
