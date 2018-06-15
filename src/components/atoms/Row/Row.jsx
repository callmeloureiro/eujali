import React from 'react'
import style from './Row.sass'

const Row = ({children, className}) => (
  <div className={className ? [className, style.row].join(' ') : style.row}>
    {children}
  </div>
)

export default Row
