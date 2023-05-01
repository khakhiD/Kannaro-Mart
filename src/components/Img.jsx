import React from 'react'
import Image from 'react-bootstrap/Image'

const Img = (props) => {
  return (
    <Image src={props.src} style={{ height: 48 + "px", borderRadius: 10 }} thumbnail/>
  )
}

export default Img