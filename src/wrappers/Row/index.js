import React from 'react'
import style from './Row.sass'

const Row = ({children, className}) => (
  <div className={className || style.row}>
    {children}
  </div>
)

export default Row
