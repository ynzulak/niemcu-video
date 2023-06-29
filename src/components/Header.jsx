import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import logoTitle from '../files/images/graphicsPage/logo.png'

import './header.scss'

function Header() {

    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (

        <header className='header'>
            <nav className='burger-menu'>
                <Link to='/'><img src={logoTitle} alt='Logo on the top of the site' /></Link>
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
                <div className='menu-big'>
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

            </nav>
        </header>

    );
}

export default Header;