import React from 'react'
import style from './Column.sass'

const Column = ({children, className}) => (
  <div className={className || style.column}>
    {children}
  </div>
)

export default Column
