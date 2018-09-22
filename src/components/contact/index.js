import React, { Component } from 'react'
import s from './styles.module.scss'

import { withToastManager } from 'react-toast-notifications';
import ScrollableAnchor from 'react-scrollable-anchor'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Photography extends Component {

  constructor(props) {
    super(props);

    this.email = React.createRef();
    this.fullname = React.createRef();
    this.message = React.createRef();
  }
  
  submit = e => {
    e.preventDefault();
    const { toastManager } = this.props

    console.log(this.props)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact",
        name: this.fullname.current.value,
        email: this.email.current.value,
        message: this.message.current.value
      })
    })
      .then(() => {
        toastManager.add(`Le formulaire pour ${this.email.current.value} a été soumis. Merci ${this.fullname.current.value}!`, {
          appearance: 'success',
          autoDismiss: true
        })

        this.fullname.current.value = "";
        this.email.current.value = "";
        this.message.current.value = "";

      })
      .catch(error => 
        toastManager.add(error, {
          appearance: 'error',
          autoDismiss: true
        })
      );

   
  }

  render() {

    return (
      <ScrollableAnchor id="contact">
        <section className={s.container}>
          <div className="container">
            <h2>Contacter</h2>
            <div className={s.email}>
              <a href="mailto:loic@lbacreations.com?subject=Me%20contacter">loic @ lbacreations.com</a>
            </div>
      
            <form name="contact" data-netlify="true" netlify="true" onSubmit={this.submit} netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
      
              <input type="text" name="name" placeholder="Nom" ref={this.fullname} />
              
              <input type="email" name="email" placeholder="Courriel" ref={this.email} />
              
              <textarea name="message" placeholder="Message" rows="4" ref={this.message}></textarea>
        
              <button type="submit">Envoyer</button>
                
            </form>
      
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default withToastManager(Photography)
