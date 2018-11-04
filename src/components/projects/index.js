import React from 'react'
import s from './styles.module.scss'
import { t } from '../../utils/translate'

import Project from './project'

import ScrollableAnchor from 'react-scrollable-anchor'
import img1 from '../../images/voile.png'
import img2 from '../../images/ageb.png'
import img3 from '../../images/fdav.png'
import solvert from '../../images/solvert.png'
import infovisual from '../../images/infovisual.png'
import osteo from '../../images/osteo.png'
import mdm from '../../images/mdm.png'
import rscore from '../../images/rscore.png'
import concours from '../../images/concours.png'

import logo_microsoft from '../../images/logo/microsoft.png'
import logo_commutifi from '../../images/logo/commutifi.png'
import logo_volume7 from '../../images/logo/volume7.png'


const projects = [{
  name: "Voile Lachine",
  img: img1,
  desc: t(
    "Site Web promotionnel et système d'inscription et de gestion du camp de jour",
    "Promotional website, registration system and management system for a day camp"
  ),
  url: "https://voilelachine.com",
  alt: "Capture d'écran de voilalachine.com"
},{
  name: "Élections AGEB",
  img: img2,
  desc: t(
    "Site promotionnel pour les élections de l'association générale étudiante de Brébeuf",
    "Promotional site for the elections of the general student association of Brébeuf"
  ),
  url: "https://electionageb.lbacreations.com/",
  alt: "Capture d'écran electionageb.ca"
},{
  name: "Aménagements Solvert",
  img: solvert,
  desc: t(
    "Site Web promotionnel et mise en place d'un système de communcation",
    "Promotional website for the elections of the general student association of Brébeuf"
  ),
  url: "https://solvert.ca",
  alt: "Capture d'écran de solvert.ca"
},{
  name: "InfoVisual",
  img: infovisual,
  desc: t(
    "Mise à jour d'un site web de grande performance et qui respecte les règles de Google",
    "Update of a high performance website that complies with Google's rules"
  ),
  url: "https://voilelachine.com",
  alt: "Capture d'écran de voilalachine.com"
},{
  name: "OstéoTerrebonne",
  img: osteo,
  desc: t(
    "Simple site web promotionnel pour une compagnie locale",
    "Simple promotional website for a local company"
  ),
  url: "https://electionageb.lbacreations.com/",
  alt: "Capture d'écran electionageb.ca"
},{
  name: "Fondation des amis de vanier",
  img: img3,
  desc: t(
    "Site Web promotionnel et système d'achat de matériel scolaire spécialisé",
    "Promotional website and purchase system of specialized educational materials"
  ),
  url: "https://fondationdesamisdevanier.ca",
  alt: "Capture d'écran de fondationdesamisdevanier.ca"
},{
  name: "Magasin du Monde",
  img: mdm,
  desc: t(
    "Site de eCommerce avec POS et système de gestion personnalisé",
    "ECommerce website with POS and personalized management system"
  ),
  url: "https://voilelachine.com",
  alt: "Capture d'écran de voilalachine.com"
},{
  name: t("Calcultrice de cote R", "RScore calculator"),
  img: rscore,
  desc: t(
    "Calculateur de cote R qui permet d'utiliser des données statistiques pour combler les données manquantes",
    "RScore calculator that allows the use of statistical data to fill missing data"
  ),
  url: "https://electionageb.lbacreations.com/",
  alt: "Capture d'écran electionageb.ca"
},{
  name: "Chant Mathématique",
  img: concours,
  desc: t(
    "Site web de vote pour un cours de chant mathématique au secondaire",
    "Voting website for a high school mathematics singing contest"
  ),
  url: "https://lbacreations.com/p/concoursmath/?a=2013",
  alt: "Capture d'écran du site du concours de chant mathématique"
}]

class Header extends React.Component {

  state = {
    slides: 3,
    slide: 0
  }

  move = (add) => {
    const isSmall = typeof window !== "undefined" ? window.innerWidth < 769 : false
    const { slides, slide } = this.state
    let next = slide + add
    if (next >= (isSmall ? slides * 3 : slides))
      next = 0
    else if (next < 0)
      next = slides
    console.log('NEXT', next)
    this.setState({ slide: next })
  }

  render() {

    const isSmall = typeof window !== "undefined" ? window.innerWidth < 769 : false
    const { slides, slide } = this.state
    let nbrSlides = isSmall ? slides * 3 : slides
    const cSlide = isSmall ? 1 : slides 

    return (
      <ScrollableAnchor id="design">
        <section className={s.projectsContainer}>
          <div dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1890 710"><defs><style>.a,.b{fill:#fff;}.a{font-size:580px;}.a,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n{font-family:Roboto-Black, Roboto;font-weight:800;}.b{font-size:123px;}.c,.g,.h,.i,.l{fill:rgba(255,255,255,0.45);}.c{font-size:59px;}.d{fill:rgba(255,255,255,0.7);font-size:129px;}.e{fill:rgba(255,255,255,0.54);font-size:121px;}.f{fill:rgba(255,255,255,0.63);font-size:85px;}.g,.k{font-size:95px;}.h{font-size:78px;}.i,.j{font-size:71px;}.j{fill:rgba(255,255,255,0.42);}.k{fill:rgba(255,255,255,0.49);}.l{font-size:88px;}.m{fill:#404040;font-size:80px;}.n{fill:#c4c4c4;font-size:199px;}</style></defs><g transform="translate(-71 -999)"><text class="a" transform="translate(1289 1550)"><tspan x="0" y="0">38</tspan></text><text class="b" transform="translate(1532 1662)"><tspan x="0" y="0">projets</tspan></text><text class="c" transform="translate(331 1177)"><tspan x="0" y="0">PHP</tspan></text><text class="d" transform="translate(773 1285)"><tspan x="0" y="0">React</tspan></text><text class="e" transform="translate(71 1313)"><tspan x="0" y="0">Javascript</tspan></text><text class="f" transform="translate(87 1644)"><tspan x="0" y="0">TypeScript</tspan></text><text class="g" transform="translate(1002 1685)"><tspan x="0" y="0">HTML 5</tspan></text><text class="h" transform="translate(1035 1152)"><tspan x="0" y="0">CSS 3</tspan></text><text class="i" transform="translate(719 1577)"><tspan x="0" y="0">React Native</tspan></text><text class="j" transform="translate(641 1682)"><tspan x="0" y="0">JAVA</tspan></text><text class="k" transform="translate(874 1426)"><tspan x="0" y="0">GraphQL</tspan></text><text class="l" transform="translate(580 1180)"><tspan x="0" y="0">ES6</tspan></text><text class="m" transform="translate(261 1434)"><tspan x="0" y="0">Design</tspan><tspan x="0" y="96">développement</tspan></text><text class="n" transform="translate(523 1461)"><tspan x="0" y="0">&amp;</tspan></text></g></svg>` }} />
    
          <div className="container">
            <h2>{t("Quelques projets", "A few projects")}</h2>
            <div className={s.sliderContainer}>
              <button className={s.arrow} disabled={slide === 0} onClick={() => this.move(-1)}>
                <div className={s.aTop}></div>
                <div className={s.aBottom}></div>
              </button>
              <div className={s.slider}>
                <div style={{ width: `${nbrSlides}00%`, transform: `translate(${slide ? `-${(100 / nbrSlides) * slide}%` : '0'})` }} className={s.projectSliderContainer}>
                    {(new Array(nbrSlides)).fill(0).map((_, i) => {
                      return <div className={s.projects} style={{ width: `${100 / slides}%`  }}>
                        {projects.slice(i * cSlide, i * cSlide + cSlide).map((p) => (
                          <Project {...p} />
                        ))}
                      </div>
                    })}
                </div>
              </div>
              <button className={`${s.arrow} ${s.aRight}`} disabled={slide === (isSmall ? slides * 3 : slides) - 1} onClick={() => this.move(1)}>
                <div className={s.aTop}></div>
                <div className={s.aBottom}></div>
              </button>
            </div>

            <h2 className={s.employeursTitle}>{t("Mes employeurs", "My employers")}</h2>
    
            <div className={s.employeurs}>
    
                <div className={s.logo}>
                  <a href="https://www.microsoft.com/en-us/garage/" target="_blank" rel="noopener noreferrer">
                    <img src={logo_microsoft} className={s.image} alt="Microsoft logo" />
                  </a>
                </div>
    
                <div className={s.logo}>
                  <a href="http://www.commutifi.com/" target="_blank" rel="noopener noreferrer">
                    <img src={logo_commutifi} className={s.image} alt="Commutifi logo" />
                  </a>
                </div>
    
                <div className={s.logo}>
                  <a href="https://volume7.io/" target="_blank" rel="noopener noreferrer">
                    <img src={logo_volume7} className={s.image} alt="Volume7 logo" />
                  </a>
                </div>
    
            </div>
    
          </div>
    
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Header
