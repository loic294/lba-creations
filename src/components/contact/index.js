import React from 'react'
//import { Link } from 'gatsby'
import s from './styles.module.scss'

const Photography = () => (
  <section id="photography" className={s.container}>
    <div className="container">
      <h2>Contacter</h2>
      <div className={s.email}>
        <a href="mailto:loic@lbacreations.com?subject=Me%20contacter">loic @ lbacreations.com</a>
      </div>
    </div>
  </section>
)

export default Photography
