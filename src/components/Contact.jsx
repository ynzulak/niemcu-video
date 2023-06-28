import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yls61mh', 'template_bgl5hvn', form.current, '6uP-pdqKIQ4WQW7Ht')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default Contact