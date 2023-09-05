import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gv0reuj', 'template_23dfpkk', form.current, 'Ay4JqAAqadHx1NqZc')
            .then((result) => {
                console.log(result.text);
                alert('Mesage Sent')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
       <div className='contact_form'>
         <form ref={form} onSubmit={sendEmail}>
            <h5 className='get'>Get in touch</h5>
            <input type="text" name="user_name" placeholder='Name'/>
            <input type="email" name="user_email" placeholder='Email' />
            <textarea name="message" placeholder='Message' />
            <input type="submit" value="Send" />
        </form>
       </div>
    );
};