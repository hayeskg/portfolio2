import React from 'react';
import me2 from '../images/me2.jpg'

const Header = () => {
  return (
    <>
      <h1>Kristof Hayes</h1>
      <p>
       I build appropriate technology solutions
        </p>
      <img class="profile-pic" src={me2} alt="me" />
       <p/>
    </>
   
  );
};

export default Header;