import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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
                    <a href='/'>Strona główna</a>
                </li>
                <li>
                    <a href='/zdjecia'>Zdjęcia</a>
                </li>
                <li>
                    <a href='/filmy'>Filmy</a>
                </li>
                <li>
                    <a href='/lektor'>Lektor</a>
                </li>
                <li>
                    <a href='/grafika'>Grafika</a>
                </li>
                <li>
                    <a href='/kontakt'>Kontakt</a>
                </li>
            </ul>
        </div>
        </CSSTransition>
    </nav>
</header>

    );
  }
  
  export default Header;