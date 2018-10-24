import React from 'react'
import s from './styles.module.scss'

const Footer = () => (
  <footer className={s.footer}>
    &copy; {new Date().getFullYear()}. Loïc Bellemare-Alford. Tous droits réservés.
  </footer>
)

export default Footer
