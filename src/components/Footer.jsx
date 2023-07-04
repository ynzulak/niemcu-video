import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './footer.scss'

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <ul className='icons-list'>
                        <li><a href='https://www.facebook.com/MichalNiemiecVideo'><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href='https://www.instagram.com/michal_niemiec_video/?hl=pl'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href='https://www.tiktok.com/@niemcu_video?lang=pl-PL'><FontAwesomeIcon icon={faTiktok} /></a></li>
                        <li><a href='https://www.youtube.com/channel/UCWwerfItp7S1BrtuPXKbosQ'><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
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
                <div className='copyrights'>
                    <p>&copy;2023 Michał Niemiec | Wszelkie Prawa Zastrzeżone</p>
                    <p>Strona została stworzona przez Maksymiliana Kałużnego</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer