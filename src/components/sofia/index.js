import React from 'react'
import s from './styles.module.scss'
import { t } from '../../utils/translate'

import sofiaImg from '../../images/sofia.svg';

import ScrollableAnchor from 'react-scrollable-anchor'

const Sofia = () => (
  <ScrollableAnchor id="sofia">
      <section className={s.sofiaContainer}>
        <div className="container">
          <h2 className={s.sofiaTitle}>
            <div className={s.sofiaTitle1}>Startup</div>
            <div className={s.sofiaTitle2}>{t("Tuotrat Sofia", "Sofia Tutors")}</div>
          </h2>
          <div className={s.sofiaContent}>
            <div className={s.sofiaText}>
              <p>
              {t(
                "J’ai confondé Tutorat Sofia. Inspirée de l’économie du partage, Sofia est le meilleur moyen de trouver un tuteur ou une tutrice compétent pour vos enfants d’âge primaire, secondaire ou collégial.",
                "I co-founded Sofia Tutors. Inspired by the shared economy model, Sofia is the best way to find a competent guardian for your primary, secondary or college-age children."
              )}</p>
              <a href="https://sofiatutors.com">
                <button>{t("Visiter le site", "Visit the site")}</button>
              </a>
            </div>
            <img src={sofiaImg} alt="4 clipart students standing side-by-side" />
          </div>
        </div>
      </section>
  </ScrollableAnchor>
)

export default Sofia
