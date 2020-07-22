import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import soundcloud from '../images/soundcloud.png';
import email from '../images/email.png';

const Contact = () => {
  return (
    <div >
      <h1>Say hello</h1>
      <section className="contact-links">
        <div>
          <figure >
            <a href="https://www.linkedin.com/in/hayeskg/">
              <img src={linkedin} alt="LinkedIn logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="https://github.com/hayeskg/">
              <img src={github} alt="GitHub logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="https://soundcloud.com/hayeskg">
              <img src={soundcloud} alt="soundcloud logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="mailto:kristof.g.hayes@gmail.com?Subject=Hello">
              <img src={email} alt="email logo" />
            </a>
          </figure>
        </div>
      </section>
    </div >
  );
};

export default Contact;