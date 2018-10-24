import React from 'react'
import s from './styles.module.scss'

import sofiaImg from '../../images/sofia.svg';

const Sofia = () => (
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
            <img src={sofiaImg} alt="4 clipart students standing side-by-side" />
          </div>
        </div>
      </section>
)

export default Sofia