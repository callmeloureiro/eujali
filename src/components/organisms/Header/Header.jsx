import React from 'react'

import style from './Header.sass'

import Column from '../../atoms/Column'
import Container from '../../atoms/Container'
import Row from '../../atoms/Row'

const Header = () => (
  <header className={style.header}>
    <Container>
      <Row>
        <Column>
          <h1>Eu já li...</h1>
        </Column>
      </Row>
    </Container>
  </header>
)

export default Header
