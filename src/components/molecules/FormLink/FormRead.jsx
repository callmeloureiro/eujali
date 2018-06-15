import React from 'react'

import style from './FormRead.sass'

class FormRead extends React.Component {
  setReads = (e) => {
    e.preventDefault()

    if (this.linkRead.value) {
      this.props.addLink(this.linkRead.value)
      this.linkRead.value = null
    }
  }

  render = () => {
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
