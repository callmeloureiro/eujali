import React from 'react'

import Container from '../../wrappers/Container'
import styleContainer from '../../wrappers/Container/Container.sass'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Page = ({children}) => (
  <Container className={styleContainer.container}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Container>
)

export default Page
