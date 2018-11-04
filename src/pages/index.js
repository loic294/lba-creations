import React from 'react'

import Layout from '../components/layout'
import Photography from '../components/photography/'
import Contact from '../components/contact/'
import Sofia from '../components/sofia/'
import Header from '../components/header/'
import Projects from '../components/projects/'
import Footer from '../components/footer/'

import { ToastProvider } from 'react-toast-notifications';

import { getLang, updateLang } from '../utils/translate'

class IndexPage extends React.Component {

  state = {
    lang: getLang()
  }

  changeLang = (lang) => {
    console.log('CHANGE LANG', lang)
    updateLang(lang)
    this.setState({ lang }, () => console.log(getLang()))
  }

  render() {
    return <ToastProvider>
      <Layout>

        <Header changeLang={this.changeLang} />

        <Projects />

        <Sofia />

        <Photography />

        <Contact />

        <Footer />

      </Layout>
    </ToastProvider>
  }
}

export default IndexPage
