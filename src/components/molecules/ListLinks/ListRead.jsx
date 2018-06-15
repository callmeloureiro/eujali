import React from 'react'

import style from './ListRead.sass'

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

  getLinksFormated = (obj) => {
    if (typeof obj !== 'object') return []

    const max = this.state.max
    const isReverse = this.state.reverse === true

    if (max && obj.length > max) obj = [...obj].slice(-max)

    if (isReverse) obj = [...obj].reverse()

    return obj
  }

  render = () => {
    const links = this.getLinksFormated(this.state.links)

    return (
      <div>
        <ul className={style.listRead}>
          { links.length > 0 &&
            links.map((elm, index) =>
              <li key={index}>
                <button type='button' onClick={() => this.deleteLink(elm.uuid)}>
                  <i className='fa fa-close'>{''}</i>
                </button>
                <a href={'//' + elm.link} target='_blank'>{elm.link}</a>
              </li>
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
