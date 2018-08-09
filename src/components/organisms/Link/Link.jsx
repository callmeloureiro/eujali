import React from 'react'

import Column from '../../atoms/Column'
import Container from '../../atoms/Container'
import Row from '../../atoms/Row'

import FormRead from '../../molecules/FormLink'
import ListRead from '../../molecules/ListLinks'

import style from './Link.sass'

import { getKeyValue, setKeyValue } from '../../../helpers/localStorage'

class Link extends React.Component {
  state = {
    links: []
  }

  componentDidMount = () => this.setState(getKeyValue('LINKS') || this.state)

  generateGUID = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)

  setLink = value => {
    this.setState(prevState => ({
      links: [
        ...prevState.links,
        {
          link: value,
          uuid: this.generateGUID(),
          category: 'unread',
          dateCreated: +new Date(),
          dateUpdated: null
        }
      ]
    }))
  }

  getLinks = () => this.state.links

  updateLinks = (arg = {}) => {
    let arr

    if (arg.action === 'delete' && arg.uuid) {
      arr = {
        links: this.state.links.filter(elm => elm.uuid !== arg.uuid)
      }
    }

    if (arg.action === 'update') {
      if (arg.links) {
        arr = {
          links: arg.links
        }
      }

      if (arg.uuid) {
        arr = {
          links: this.state.links
        }

        const index = arr.links.findIndex(elm => elm.uuid === arg.uuid)

        arr.links[index] = {
          ...arr.links[index],
          ...arg.fields
        }
      }
    }

    if (arr) {
      this.setState(arr)

      setKeyValue('LINKS', arr)
    }
  }

  render = () => {
    return (
      <Container className={style.linkContainer}>
        <Row>
          <Column>
            <FormRead addLink={this.setLink} />
          </Column>
        </Row>
        <Row>
          <Column>
            <ListRead
              dataLinks={this.getLinks()}
              updateLinks={this.updateLinks}
              max={8}
            />
          </Column>
        </Row>
      </Container>
    )
  }
}

export default Link
