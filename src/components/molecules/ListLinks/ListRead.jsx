import React from 'react'

import style from './ListRead.sass'

import moment from 'moment'

moment.locale('pt-BR')

class ListRead extends React.Component {
  state = {
    links: [],
    max: this.props.max || 5,
    reverse: this.props.reverse || false
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { dataLinks } = nextProps
    const { links } = prevState

    if (dataLinks !== links) {
      return {
        links: dataLinks
      }
    }

    return null
  }

  setRead = uuid => {
    const { updateLinks } = this.props

    updateLinks({
      action: 'update',
      uuid: uuid,
      fields: {
        category: 'read',
        dateUpdated: +new Date()
      }
    })
  }

  getLinksFormated = obj => {
    if (typeof obj !== 'object') return []

    const { max, isReverse } = this.state

    obj = obj.filter(elm => elm.category === 'unread')

    if (max && obj.length > max) {
      obj = isReverse ? obj.slice(-max) : obj.slice(0, max)
    }

    if (isReverse) obj = obj.reverse()

    return obj
  }

  render = () => {
    const links = this.getLinksFormated(this.state.links)

    return (
      <div>
        <ul className={style.listRead}>
          {links.length > 0 &&
            links.map((elm, index) => (
              <li key={index}>
                <button type='button' onClick={() => this.setRead(elm.uuid)}>
                  <span className={style.circle}>{''}</span>
                </button>
                <div className={style.listReadContent}>
                  <a href={'//' + elm.link} target='_blank'>{elm.link}</a>
                  <small>{moment(elm.dateCreated).calendar()}</small>
                </div>
              </li>
            ))}

          {links.length === 0 && <li>Sem nenhum registro</li>}
        </ul>
      </div>
    )
  }
}

export default ListRead
