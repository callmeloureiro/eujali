import React from 'react'

import style from './ListRead.sass'

import moment from 'moment'

moment.locale('pt-BR')

class ListRead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      links: [],
      max: this.props.max,
      reverse: this.props.reverse
    }
  }

  componentDidUpdate = () => {
    if (this.props.dataLinks !== this.state.links) {
      this.setState({
        links: this.props.dataLinks
      })

      this.props.updateLinks({
        action: 'update',
        links: this.props.dataLinks
      })
    }
  }

  setRead = (uuid) => {
    this.props.updateLinks({
      action: 'update',
      uuid: uuid,
      fields: {
        category: 'read',
        dateUpdated: +new Date()
      }
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
                <button
                  type='button'
                  onClick={() => this.setRead(elm.uuid)}
                >
                  <span className={style.circle}>{''}</span>
                </button>
                <div className={style.listReadContent}>
                  <a href={'//' + elm.link} target='_blank'>{elm.link}</a>
                  <small>{moment(elm.dateCreated).calendar()}</small>
                </div>
              </li>
            )
          }

          { links.length === 0 &&
            <li>Sem nenhum registro</li>
          }
        </ul>
      </div>
    )
  }
}

export default ListRead
