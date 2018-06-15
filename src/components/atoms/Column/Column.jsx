import React from 'react'
import style from './Column.sass'

const Column = ({className, children}) => (
  <div className={className ? [className, style.column].join(' ') : style.column}>
    {children}
  </div>
)

export default Column
