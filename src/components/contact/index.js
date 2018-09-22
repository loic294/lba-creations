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

      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />

        <input type="text" name="name" placeholder="Nom" />
        
        <input type="email" name="email" placeholder="Courriel" />
        
        <textarea name="message" placeholder="Message" rows="4"></textarea>
  
        <button type="submit">Envoyer</button>
          
      </form>

    </div>
  </section>
)

export default Photography
