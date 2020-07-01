import React from 'react';

import machine from '../images/machine.png';
import iiot3 from '../images/iiot3.png';
import cs3 from '../images/cs3.png';
import nc2 from '../images/nc2.png';
import eco4 from '../images/eco4.png';
import loop2 from '../images/loop2.png';

import { Chip } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const tech = [{
  labels: [
    'CoDeSys',
    'C# .NET',
    'Networking',
    'Edge computing',
    'SCADA',
    'iIOT',
    'MQTT',
    'iVPN'
  ]
},
{
  labels: [
    'Node.js',
    'React',
    'Material-UI',
    'D3.js',
    'Express',
    'PSQL',
    'MongoDB',
    'REST API',
    'GraphQL',
    'Apollo',
    'FireAuth',
    'Jest',
    'TDD',
    'Git'
  ]
},
{

  labels: [
    'Agile',
    'Lean',
    'Remote',
    'Local',
    'Organic',
    'Low Impact',
    'Social',
    'Learning'
  ]
}

]


const Interests = () => {
  return (

    <section class="interests">
      <div>
        <h1 class="header1">IoT and Automation</h1>
        <figure>
          <img src={machine} alt="a control system layout" />
        </figure>
        <p>
          Interfacing is the name of the game. Connect things, observe data, tell others about it.
            </p>
        <figure>
          <img src={iiot3} alt="industrial robot" />
        </figure>
        <h3>Tech stack:</h3>
        <div class='techstack'>
          {tech[0].labels.map((label) => {
            return <Chip label={label} variant="outlined" />
          })}
        </div>
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
        <h3>Tech stack:</h3>
        <div class='techstack'>
          {tech[1].labels.map((label) => {
            return <Chip label={label} variant="outlined" />
          })}
        </div>
      </div>
      <div>
        <h1 class="header1">Sustainability</h1>
        <figure>
          <img src={eco4} alt="sustainable graphic" />
        </figure>
        <p>
          Solving problems where technology and sustainability meet. Future business models.
            </p>
        <figure>
          <img src={loop2} alt="feedback loop" />
        </figure>
        <h3>Skills stack:</h3>
        <div class='techstack'>
          {tech[2].labels.map((label) => {
            return <Chip label={label} variant="outlined" />
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;