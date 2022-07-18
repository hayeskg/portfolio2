import React from 'react';
import machine from '../images/machine.png';
import iiot3 from '../images/iiot3.png';
import cs3 from '../images/cs3.png';
import eco4 from '../images/eco4.png';
import loop2 from '../images/loop2.png';
import tool from '../images/tool.png';


const Interests = () => {
  return (

    <section class="interests">
      <div>
        <h1 class="header1">Appropriate Tech</h1>
        <figure>
          <img src={machine} alt="a control system layout" />
        </figure>
        <p>
          Connecting things. Making them move. Benchmark and improve processes.
            </p>
        <figure>
          <img src={iiot3} alt="industrial robot" />
        </figure>
      </div>
      <div>
        <h1 class="header1">System Development</h1>
        <figure>
          <img src={cs3} alt="a graphic depicting Iot" />
        </figure>
        <p>
          Using open-source resources to build appropriate tech solutions. Start small, scale at pace.
        </p>
        <figure>
          <img src={tool} alt="tool icon" />
        </figure>
      </div>
      <div>
        <h1 class="header1">Projects</h1>
        <figure>
          <img src={eco4} alt="sustainable graphic" />
        </figure>
        <p>
          Develop partnerships, products and services.
        </p>
        <figure>
          <img src={loop2} alt="feedback loop" />
        </figure>
      </div>
    </section>
  );
};

export default Interests;