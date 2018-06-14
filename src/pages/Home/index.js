/* global localStorage */

import React from 'react'

import Page from '../../templates/Page'

import Column from '../../wrappers/Column'
import Container from '../../wrappers/Container'
import Row from '../../wrappers/Row'

import FormRead from '../../components/Form-read'
import ListRead from '../../components/List-read'

class Home extends React.Component {
  render () {
    return (
      <Page>
        <Container>
          <Row>
            <Column>
              <FormRead />
            </Column>
            <Column>
              <ListRead />
            </Column>
          </Row>
        </Container>
      </Page>
    )
  }
}

export default Home
