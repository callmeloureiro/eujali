import React from 'react'

import style from './FormRead.sass'

class FormRead extends React.Component {
  state = {
    link: ''
  }

  handlerChange = e => this.setState({ [e.target.name]: e.target.value })

  formatLink = link => link.replace(/(^\w+:|^)\/\//, '')

  setReads = e => {
    e.preventDefault()

    if (this.state.link) {
      const { addLink } = this.props
      let { link } = this.state

      link = this.formatLink(link)

      addLink(link)

      this.setState({
        link: ''
      })
    }
  }

  render = () => (
    <div className={style.formRead}>
      <form onSubmit={this.setReads}>
        <input
          type='text'
          placeholder='cole aqui'
          onChange={this.handlerChange}
          value={this.state.link}
          name='link'
        />
        <button type='submit' disabled={!this.state.link}>
          <span>adicionar</span>
        </button>
      </form>
    </div>
  )
}

export default FormRead
