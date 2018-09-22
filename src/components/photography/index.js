import React from 'react'
//import { Link } from 'gatsby'
import s from './styles.module.scss'

import vancouver from '../../images/photography/vancouver.jpg'
import automne from '../../images/photography/automne.jpg'
import kayak from '../../images/photography/kayak.jpg'
import maison from '../../images/photography/maison.jpg'
import toronto from '../../images/photography/toronto.jpg'
import parc from '../../images/photography/parc.jpg'
import nuit from '../../images/photography/nuit.jpg'
import france from '../../images/photography/france.jpg'

const Photography = () => (
  <section id="photography" className={s.container}>
    <div className="container">
      <div className={`${s.parts} ${s.part1}`}>
        <div className={s.p1l}>
          <h2>Photographie</h2>
          <button>Visiter la galerie</button>
          <img src={automne} className={s.image} alt="Ruelle de Vancouver durant la nuit" />
        </div>
        <div className={s.p1r}>
          <img src={vancouver} className={s.image} alt="Ruelle de Vancouver durant la nuit" />
        </div>
      </div>

      <div className={`${s.parts} ${s.part2}`}>
        <div className={s.p2l}>
          <img src={kayak} className={s.image} alt="Kayak sur l'eau au lever du soleil" />
        </div>
        <div className={s.p2r}>
          <img src={maison} className={s.image} alt="Maisonnette dans un champ au bord de l'eau" />
          <img src={toronto} className={s.image} alt="Toronto dans la brume vu d'un avion" />
        </div>
      </div>

      <div className={`${s.parts} ${s.part3}`}>
        <div className={s.p3l}>
          <img src={parc} className={s.image} alt="Kayak sur l'eau au lever du soleil" />
        </div>
        <div className={s.p3r}>
          <img src={nuit} className={s.image} alt="Maisonnette dans un champ au bord de l'eau" />
        </div>
      </div>
     


    </div>
  </section>
)

export default Photography
