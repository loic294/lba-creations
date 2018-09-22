import React from 'react'
//import { Link } from 'gatsby'
import s from './styles.module.scss'

import { withToastManager } from 'react-toast-notifications';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Photography = ({ toastManager }) => (
  <section id="photography" className={s.container}>
    <div className="container">
      <h2>Contacter</h2>
      <div className={s.email}>
        <a href="mailto:loic@lbacreations.com?subject=Me%20contacter">loic @ lbacreations.com</a>
      </div>

      <form netlify onSubmit={e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
            "form-name": "contact",
            name: this.name.target.value,
            email: this.name.target.email,
            message: this.name.target.message
          })
        })
          .then(() => toastManager.add("Le formulaire a été soumis.", {
            appearance: 'success',
            autoDismiss: false,
          }))
          .catch(error => alert(error));

        e.preventDefault();
      }}>
        <input type="hidden" name="form-name" value="contact" />

        <input type="text" name="name" placeholder="Nom" ref={i => this.name = i} />
        
        <input type="email" name="email" placeholder="Courriel" ref={i => this.email = i} />
        
        <textarea name="message" placeholder="Message" rows="4"  ref={i => this.message = i}></textarea>
  
        <button type="submit">Envoyer</button>
          
      </form>

    </div>
  </section>
)

export default withToastManager(Photography)
