import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';

function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
<header> 
    <nav>
        <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div>
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
    </nav>
    
</header>
    );
  }
  
  export default Header;