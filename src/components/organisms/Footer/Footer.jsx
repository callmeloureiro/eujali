import React from 'react'

import Column from '../../atoms/Column'
import Container from '../../atoms/Container'
import Row from '../../atoms/Row'

import style from './Footer.sass'

const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.footerBorder}>
      <Row center>
        <Column>
          <h2>Footer works!</h2>
        </Column>
      </Row>
    </Container>
  </footer>
)

export default Footer
