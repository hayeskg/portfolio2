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
          Interfacing is the name of the game. Connect things, look at data, tell others about it.
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
          Builing prototypes quickly, in diverse, self-organising teams. Staying engaged with evolving solutions.
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
          Solving problems on the convergence of technology and sustainability. Future business models.
            </p>
        <figure>
          <img src={loop2} alt="feedback loop" />
        </figure>
      </div>
    </section>
  );
};

export default Interests;