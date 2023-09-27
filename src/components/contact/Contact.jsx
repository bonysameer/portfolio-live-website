// import React from 'react';
import './contact.css';
import {MdOutlineAttachEmail} from 'react-icons/md';
import {PiMicrosoftOutlookLogoLight} from 'react-icons/pi';
import {RiWhatsappLine} from 'react-icons/ri';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfpyfj5', 'template_74c8aga', form.current, '-3yIdxNQjq-mtdXOd')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineAttachEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>connectbsameer@gmail.com</h5>
            <a href='mailto:connectbsameer@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <PiMicrosoftOutlookLogoLight className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>sameer.bony@outlook.com</h5>
            <a href='https://outlook.live.com/mail/0/' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-8296491353</h5>
            <a href='https://wa.link/ln0o4t' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact