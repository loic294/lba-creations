import React from 'react'

import Layout from '../components/layout'
import Photography from '../components/photography/'
import Contact from '../components/contact/'
import Sofia from '../components/sofia/'
import Header from '../components/header/'
import Projects from '../components/projects/'
import Footer from '../components/footer/'

import { ToastProvider } from 'react-toast-notifications';

const IndexPage = () => (
  <ToastProvider>
    <Layout>

      <Header />

      <Projects />

      <Sofia />

      <Photography />

      <Contact />

      <Footer />

    </Layout>
  </ToastProvider>
)

export default IndexPage
