import React from 'react'
import style from './Container.sass'

const Container = ({className, children}) => (
  <div className={className || (`${style.container} ${style.container1120}`)}>
    {children}
  </div>
)

export default Container
