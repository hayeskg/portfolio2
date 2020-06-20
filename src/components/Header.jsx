import React from 'react';
import me2 from '../images/me2.jpg'

const Header = () => {
  return (
    <>
      <h1>Kristof Hayes</h1>
      <p>
        Hi, I'm Kristof - an engineer with a background in industrial automation and IoT. I'm exploring open-source web technologies to build digital solutions
        </p>
      <img class="profile-pic" src={me2} alt="me" />
      <p>Some things I like working on - take a look around!</p>
    </>
  );
};

export default Header;