import React from 'react';
import me2 from '../images/me2.jpg'

const Header = () => {
  return (
    <>
      <h1>Kristof Hayes</h1>
      <p>
        Engineer solving technology problems and building things.
        </p>
      <img class="profile-pic" src={me2} alt="me" />
      <p>Some things I like working on - take a look around!</p>
    </>
  );
};

export default Header;