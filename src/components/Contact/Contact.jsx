import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './style.scss'


export const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4o5gpx', 'template_sfwifdp', form.current, '_ClOU6xDAmuOF4JRb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div id='contact' className='contact'>
            <div class="about">
                <div class="tittle1">
                    <h1>CONTACT ME</h1>
                </div>
                <div class="line"></div>

            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='bar1'>
                    <input type='text' placeholder='Name' name='user_name'/>
                    <input type="email" name="user_email" placeholder='Email' />
                </div>

                <div className='bar1'>
                    <input type='text' placeholder='Surname' />
                    <input type='text' placeholder='Phone' />
                </div>

                <div className='bar2'>
                    <input type='text' name="message"/>
                    <button type='submit' value="Send">Submit</button>
                </div>

            </form>

        </div>
    )
}

