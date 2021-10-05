import React from 'react';

import Logo from '../../assets/logo.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Stuff Finder Logo" />
    </header>
  );
}
