import React from 'react'

import style from './ListRead.sass'

class ListRead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      links: []
    }
  }

  componentWillMount () {
    this.setState({
      links: JSON.parse(localStorage.getItem('LINKS'))
    })
  }

  addState = () => {
    this.setState(prevState => ({
      links: [...prevState.links, 'added']
    }))
  }

  render () {
    return (
      <div>
        <h1>List to read</h1>
        <ul>
          {this.state.links &&
            this.state.links.map((elm, index) =>
              <li onClick={this.addState} key={index}>{elm}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default ListRead
