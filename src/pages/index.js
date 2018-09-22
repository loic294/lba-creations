import React from 'react'
//import { Link } from 'gatsby'
import s from './home.module.scss'

import Layout from '../components/layout'
import Photography from '../components/photography/'
import Contact from '../components/contact/'

import sofia from '../images/sofia.svg';

import { ToastProvider } from 'react-toast-notifications';

const IndexPage = () => (
  <ToastProvider>
    <Layout>

      <header className={s.header}>
          <div className={s.siteTitle}>
            <svg viewBox="0 0 137 18">
              <text className={s.siteTilteText} x="0" y="15">LBA Créations</text>
            </svg>
          </div>

          <div className={s.headerContent}>
            <div className={s.headerImage} />
            <div className={s.headerDetails}>
              <h1 className={s.myName}>
                Loïc <br/>
                Bellemare-Alford
              </h1>
              <div className={s.headerNav}>
                <div><a href="#design">DESIGN & DÉVELOPEMENT</a></div>
                <div><a href="#photography">PHOTOGRAPHIE</a></div>
              </div>
            </div>
          </div>

      </header>

      <section className={s.projectsContainer}>
        <div dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1890 710"><defs><style>.a,.b{fill:#fff;}.a{font-size:580px;}.a,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n{font-family:Roboto-Black, Roboto;font-weight:800;}.b{font-size:123px;}.c,.g,.h,.i,.l{fill:rgba(255,255,255,0.45);}.c{font-size:59px;}.d{fill:rgba(255,255,255,0.7);font-size:129px;}.e{fill:rgba(255,255,255,0.54);font-size:121px;}.f{fill:rgba(255,255,255,0.63);font-size:85px;}.g,.k{font-size:95px;}.h{font-size:78px;}.i,.j{font-size:71px;}.j{fill:rgba(255,255,255,0.42);}.k{fill:rgba(255,255,255,0.49);}.l{font-size:88px;}.m{fill:#404040;font-size:80px;}.n{fill:#c4c4c4;font-size:199px;}</style></defs><g transform="translate(-71 -999)"><text class="a" transform="translate(1289 1550)"><tspan x="0" y="0">38</tspan></text><text class="b" transform="translate(1532 1662)"><tspan x="0" y="0">projets</tspan></text><text class="c" transform="translate(331 1177)"><tspan x="0" y="0">PHP</tspan></text><text class="d" transform="translate(773 1285)"><tspan x="0" y="0">React</tspan></text><text class="e" transform="translate(71 1313)"><tspan x="0" y="0">Javascript</tspan></text><text class="f" transform="translate(87 1644)"><tspan x="0" y="0">TypeScript</tspan></text><text class="g" transform="translate(1002 1685)"><tspan x="0" y="0">HTML 5</tspan></text><text class="h" transform="translate(1035 1152)"><tspan x="0" y="0">CSS 3</tspan></text><text class="i" transform="translate(719 1577)"><tspan x="0" y="0">React Native</tspan></text><text class="j" transform="translate(641 1682)"><tspan x="0" y="0">JAVA</tspan></text><text class="k" transform="translate(874 1426)"><tspan x="0" y="0">GraphQL</tspan></text><text class="l" transform="translate(580 1180)"><tspan x="0" y="0">ES6</tspan></text><text class="m" transform="translate(261 1434)"><tspan x="0" y="0">Design</tspan><tspan x="0" y="96">développement</tspan></text><text class="n" transform="translate(523 1461)"><tspan x="0" y="0">&amp;</tspan></text></g></svg>` }} />
      </section>

      <section className={s.sofiaContainer}>
        <div className="container">
          <h2 className={s.sofiaTitle}>
            <div className={s.sofiaTitle1}>Startup</div>
            <div className={s.sofiaTitle2}>Tuotrat Sofia</div>
          </h2>
          <div className={s.sofiaContent}>
            <div className={s.sofiaText}>
              <p>J’ai confondé Tutorat Sofia. Inspirée de l’économie du partage, Sofia est le meilleur moyen de trouver un tuteur ou une tutrice compétent pour vos enfants d’âge primaire, secondaire ou collégial.</p>
              <button>Visiter le site</button>
            </div>
            <img src={sofia} alt="4 clipart students standing side-by-side" />
          </div>
        </div>
      </section>

      <Photography />

      <Contact />

    </Layout>
  </ToastProvider>
)

export default IndexPage
