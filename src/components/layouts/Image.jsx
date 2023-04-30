import React from 'react'
import classes from './Image.module.css'

const Image = (props) => {
  return (
      <img src={props.src} className={classes.image} />
  )
}

export default Image