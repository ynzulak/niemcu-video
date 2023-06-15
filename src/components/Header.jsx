import { Link, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
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
                    <Link to='/'>Strona główna</Link>
                </li>
                <li>
                    <Link to='/zdjecia'>Zdjęcia</Link>
                </li>
                <li>
                    <Link to='/filmy'>Filmy</Link>
                </li>
                <li>
                    <Link to='/lektor'>Lektor</Link>
                </li>
                <li>
                    <Link to='/grafika'>Grafika</Link>
                </li>
                <li>
                    <Link to='/kontakt'>Kontakt</Link>
                </li>
            </ul>
        </div>
        </CSSTransition>
    </nav>
</header>
</BrowserRouter>
    );
  }
  
  export default Header;