import React from 'react'
import style from './Row.sass'

const Row = ({children, className, center}) => {
  let classes = [style.row]

  if (className) classes = [...classes, className]

  if (center) classes = [...classes, style.rowCentered]

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Row
