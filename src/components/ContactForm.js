import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    // e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        setStateMessage('Message sent!');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      }, (error) => {
        setStateMessage('Something went wrong, please try again later');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      })
  }

  return (

    <>

      {/* <form
        className='total-form'>
        <div>
          <p>Name</p>
          <input type="text" name="from_name" />
        </div>

        <div>
          <p>Email</p>
          <input type="email" name="from_email" />
          <label>Message</label>
        </div>

        <div>
          <textarea name="message" />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </div>

      </form> */}




      <div class="form-container-main">
        <div class="form-container">
          <div class="form-image">
            <h1 class="montserrat">Contact Me</h1>
            {/* <img src="./images/laptop.png" alt="" /> */}
          </div>
          <form class="form" ref={form} onSubmit={sendEmail}>
            <input type="text" id="name" placeholder="Name" autofocus name="from_name" />
            <input type="email" id="mail" placeholder="Email" name="from_email" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Say Hello" ></textarea>
            <div class="button-container">
              {/* <div type='submit' class="send-button" value="Send" disabled={isSubmitting}>Send</div> */}
              <input type='submit' class="send-button" value="Send" disabled={isSubmitting} />
              {stateMessage && <p>{stateMessage}</p>}
              <div class="reset-button-container">
                <div class="reset-button" value="Reset" id="reset-btn">Reset</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;