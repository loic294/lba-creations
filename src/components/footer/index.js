import React from 'react'
import s from './styles.module.scss'
import { t } from '../../utils/translate'

const Footer = () => (
  <footer className={s.footer}>
    &copy; {new Date().getFullYear()}. Loïc Bellemare-Alford. {t("Tous droits réservés.", "All rights reserved.")}
  </footer>
)

export default Footer
