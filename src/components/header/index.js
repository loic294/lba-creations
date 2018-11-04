import React from 'react'
import s from './styles.module.scss'
import { getLang, t } from '../../utils/translate'

const Header = ({ changeLang }) => (
  <header className={s.header}>

    <div className={s.lang}>
      <div>
        <a href="#fr" onClick={e => {e.preventDefault(); changeLang('fr')}} className={getLang() === "fr" ? s.activeLang : ""}>FR</a>
        <a href="#en" onClick={e => {e.preventDefault(); changeLang('en')}} className={getLang() === "en" ? s.activeLang : ""}>EN</a>
      </div>
    </div>

    <div className={s.siteTitle}>
      <svg viewBox="0 0 137 18">
        <text className={s.siteTilteText} x="0" y="15">{t("LBA Créations", "LBA Creations")}</text>
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
          <div><a href="#design">{t("DESIGN & DÉVELOPEMENT", "DESIGN & DEVELOPMENT")}</a></div>
          <div><a href="#photography">{t("PHOTOGRAPHIE", "PHOTOGRAPHY")}</a></div>
        </div>
      </div>
    </div>

  </header>
)

export default Header
