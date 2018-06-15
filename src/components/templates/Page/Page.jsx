import React from 'react'

import Container from '../../atoms/Container'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const Page = ({children}) => (
  <Container fluid>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Container>
)

export default Page
