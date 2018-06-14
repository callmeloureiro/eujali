/* global localStorage */

import React from 'react'

import style from './FormRead.sass'

class FormRead extends React.Component {
  setReads = (e) => {
    e.preventDefault()
    let arr = JSON.parse(localStorage.getItem('LINKS')) || []
    arr.push(this.linkRead.value)

    localStorage.setItem('LINKS', JSON.stringify(arr))
  }

  render () {
    return (
      <div className={style.formRead}>
        <form onSubmit={this.setReads}>
          <input type='text' ref={(input) => (this.linkRead = input)} />
          <button type='submit'>Adicionar</button>
        </form>
      </div>
    )
  }
}

export default FormRead
