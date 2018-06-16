import React from 'react'

import style from './FormRead.sass'

class FormRead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      link: ''
    }
  }

  handlerChange = (e) => {
    this.setState({
      link: e.target.value
    })
  }

  formatLink = (link) => link.replace(/(^\w+:|^)\/\//, '')

  setReads = (e) => {
    e.preventDefault()

    if (this.state.link) {
      const link = this.formatLink(this.state.link)

      this.props.addLink(link)

      this.setState({
        link: ''
      })
    }
  }

  render = () => {
    return (
      <div className={style.formRead}>
        <form onSubmit={this.setReads}>
          <input
            type='text'
            placeholder='cole aqui'
            onChange={this.handlerChange}
            value={this.state.link}
          />
          <button type='submit' disabled={!this.state.link}>
            <span>adicionar</span>
          </button>
        </form>
      </div>
    )
  }
}

export default FormRead
