import React from 'react'
import s from './styles.module.scss'

import ScrollableAnchor from 'react-scrollable-anchor'
import img1 from '../../images/voile.png'
import img2 from '../../images/ageb.png'
import img3 from '../../images/fdav.png'

const Header = () => (
  <ScrollableAnchor id="design">
    <section className={s.projectsContainer}>
      <div dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1890 710"><defs><style>.a,.b{fill:#fff;}.a{font-size:580px;}.a,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n{font-family:Roboto-Black, Roboto;font-weight:800;}.b{font-size:123px;}.c,.g,.h,.i,.l{fill:rgba(255,255,255,0.45);}.c{font-size:59px;}.d{fill:rgba(255,255,255,0.7);font-size:129px;}.e{fill:rgba(255,255,255,0.54);font-size:121px;}.f{fill:rgba(255,255,255,0.63);font-size:85px;}.g,.k{font-size:95px;}.h{font-size:78px;}.i,.j{font-size:71px;}.j{fill:rgba(255,255,255,0.42);}.k{fill:rgba(255,255,255,0.49);}.l{font-size:88px;}.m{fill:#404040;font-size:80px;}.n{fill:#c4c4c4;font-size:199px;}</style></defs><g transform="translate(-71 -999)"><text class="a" transform="translate(1289 1550)"><tspan x="0" y="0">38</tspan></text><text class="b" transform="translate(1532 1662)"><tspan x="0" y="0">projets</tspan></text><text class="c" transform="translate(331 1177)"><tspan x="0" y="0">PHP</tspan></text><text class="d" transform="translate(773 1285)"><tspan x="0" y="0">React</tspan></text><text class="e" transform="translate(71 1313)"><tspan x="0" y="0">Javascript</tspan></text><text class="f" transform="translate(87 1644)"><tspan x="0" y="0">TypeScript</tspan></text><text class="g" transform="translate(1002 1685)"><tspan x="0" y="0">HTML 5</tspan></text><text class="h" transform="translate(1035 1152)"><tspan x="0" y="0">CSS 3</tspan></text><text class="i" transform="translate(719 1577)"><tspan x="0" y="0">React Native</tspan></text><text class="j" transform="translate(641 1682)"><tspan x="0" y="0">JAVA</tspan></text><text class="k" transform="translate(874 1426)"><tspan x="0" y="0">GraphQL</tspan></text><text class="l" transform="translate(580 1180)"><tspan x="0" y="0">ES6</tspan></text><text class="m" transform="translate(261 1434)"><tspan x="0" y="0">Design</tspan><tspan x="0" y="96">développement</tspan></text><text class="n" transform="translate(523 1461)"><tspan x="0" y="0">&amp;</tspan></text></g></svg>` }} />

      <div className="container">
        <h2>Quelques projects</h2>

        <div className={s.projects}>

            <div className={s.project}>
              <div className={s.imgContainer}>
                <img src={img1} className={s.image} alt="Capture d'écran de voilalachine.com" />
              </div>
              <div className={s.content}>
                <h3>Voile Lachine</h3>
                <p>Site Web promotionnel et système d'inscription et de gestion du camp de jour</p>
                <a href="https://voilelachine.com" target="_blank" rel="noopener noreferrer">
                  <button>Visiter le site</button>
                </a>
              </div>
            </div>

            <div className={s.project}>
              <div className={s.imgContainer}>
              <img src={img2} className={s.image} alt="Capture d'écran electionageb.ca" />
              </div>
              <div className={s.content}>
                <h3>Élections AGEB</h3>
                <p>Si promotionnel pour les élections de l'association générale étudiante de Brébeuf</p>
                <a href="https://electionageb.lbacreations.com/" target="_blank" rel="noopener noreferrer">
                  <button>Visiter le site</button>
                </a>
              </div>
            </div>

            <div className={s.project}>
              <div className={s.imgContainer}>
                <img src={img3} className={s.image} alt="Capture d'écran de fondationdesamisdevanier.ca" />
              </div>
              <div className={s.content}>
                <h3>Fondation des amis de vanier</h3>
                <p>Site Web promotionnel et système d'achat de matériel scolaire spécialisé</p>
                <a href="https://fondationdesamisdevanier.ca" target="_blank" rel="noopener noreferrer">
                  <button>Visiter le site</button>
                </a>
              </div>
            </div>

        </div>

      </div>

    </section>
  </ScrollableAnchor>
)

export default Header
