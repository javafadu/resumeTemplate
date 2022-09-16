import React from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Disclaimer from './components/footer/disclaimer'
import Footer from './components/footer/footer'
import TermsPolicy from './components/footer/terms-policy'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Resume from './components/resume/resume'
import Services from './components/services/services'

const App = () => {
  return (
    <>
    <Header/>
    <Intro></Intro>
    <About></About>
    <Services></Services>
    <Resume></Resume>
    <Contact></Contact>
    <Footer></Footer>
    <TermsPolicy></TermsPolicy>
    <Disclaimer></Disclaimer>

    </>
  )
}

export default App