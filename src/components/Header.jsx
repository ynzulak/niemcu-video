import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {  Link } from 'react-router-dom';

import './header.scss'

function Header() {

    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
      };

    return (

<header className='header'> 
    <nav className='burger-menu'>
        <div className='hamburger-bars'>
        <Hamburger size={30} onClick={toggleMenu} toggled={isOpen} toggle={setOpen} />
        </div>
        <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div className='menu'>
            <ul>
                <li>
                    <Link to='/' onClick={toggleMenu}>Strona główna</Link>
                </li>
                <li>
                    <Link to='/zdjecia' onClick={toggleMenu}>Zdjęcia</Link>
                </li>
                <li>
                    <Link to='/filmy' onClick={toggleMenu}>Filmy</Link>
                </li>
                <li>
                    <Link to='/lektor' onClick={toggleMenu}>Lektor</Link>
                </li>
                <li>
                    <Link to='/grafika' onClick={toggleMenu}>Grafika</Link>
                </li>
                <li>
                    <Link to='/kontakt' onClick={toggleMenu}>Kontakt</Link>
                </li>
            </ul>
        </div>
        </CSSTransition>
    </nav>
</header>

    );
  }
  
  export default Header;