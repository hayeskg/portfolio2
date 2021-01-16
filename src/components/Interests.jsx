import React from 'react';
import machine from '../images/machine.png';
import iiot3 from '../images/iiot3.png';
import cs3 from '../images/cs3.png';
import nc2 from '../images/nc2.png';
import eco4 from '../images/eco4.png';
import loop2 from '../images/loop2.png';


const Interests = () => {
  return (

    <section class="interests">
      <div>
        <h1 class="header1">IoT and Automation</h1>
        <figure>
          <img src={machine} alt="a control system layout" />
        </figure>
        <p>
          Connecting things. Building data landscapes. Improving processes.
            </p>
        <figure>
          <img src={iiot3} alt="industrial robot" />
        </figure>
      </div>
      <div>
        <h1 class="header1">Software Development</h1>
        <figure>
          <img src={cs3} alt="a graphic depicting Iot" />
        </figure>
        <p>
          Using open source tools and technologies to build rapid prototypes. Start small then scale fast to demonstrate value.
        </p>
        <figure>
          <img src={nc2} alt="northcoders logo" />
        </figure>
      </div>
      <div>
        <h1 class="header1">Sustainability</h1>
        <figure>
          <img src={eco4} alt="sustainable graphic" />
        </figure>
        <p>
          Solving problems where technology and sustainability overlap. Building impactful businesses.
        </p>
        <figure>
          <img src={loop2} alt="feedback loop" />
        </figure>
      </div>
    </section>
  );
};

export default Interests;