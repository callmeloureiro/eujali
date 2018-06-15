import React from 'react'
import style from './Container.sass'

const Container = ({className, fluid, children}) => {
  let classes = [className] || []

  if (fluid) {
    classes = [...classes, style.container]
  } else {
    classes = [...classes, style.container, style.container110]
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Container
