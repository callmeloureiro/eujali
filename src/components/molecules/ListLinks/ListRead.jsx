import React from 'react'

class ListRead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      links: [],
      max: this.props.max,
      reverse: this.props.reverse
    }
  }

  componentWillReceiveProps = (props) => {
    if (props.dataLinks !== this.state.links) {
      this.setState({
        links: props.dataLinks
      })

      this.props.updateLinks({
        action: 'update',
        links: props.dataLinks
      })
    }
  }

  deleteLink = (uuid) => {
    this.props.updateLinks({
      action: 'delete',
      uuid: uuid
    })
  }

  getLinks = (obj) => {
    if (typeof obj !== 'object') return []

    const max = this.state.max
    const isReverse = this.state.reverse === true

    if (max && obj.length > max) obj = [...obj].slice(-max)

    if (isReverse) obj = [...obj].reverse()

    return obj
  }

  render = () => {
    const links = this.getLinks(this.state.links)

    return (
      <div>
        <ul>
          { links.length > 0 &&
            links.map((elm, index) =>
              <li onClick={() => this.deleteLink(elm.uuid)} key={index}>{elm.link}</li>
            )
          }

          { links.length === 0 &&
            `Sem nenhum registro`
          }
        </ul>
      </div>
    )
  }
}

export default ListRead
