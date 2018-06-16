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
          <small>Developed with ♥ by Matheus Loureiro. Licensed under the MIT License.</small>
        </Column>
      </Row>
    </Container>
  </footer>
)

export default Footer
