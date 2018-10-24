import React from 'react'
import s from './styles.module.scss'

const Header = () => (
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
)

export default Header