import Contact from '../components/Contact';
import './styles/contactPage.scss'

function ContactPage() {
    return (
        <div className="main-page">
            <div className='title-with-description'>
                <div className='title'>
                    <h1>Kontakt</h1>
                </div>
                <div className='description'>
                    <span>kontakt@niemcu-video.pl</span>
                    <span>Tel.: marvellepszyodstarwars</span>
                </div>
            </div>
            <hr></hr>
            <div className='contact-form' data-aos="zoom-in">
                <Contact />
            </div>
        </div>
    )
}

export default ContactPage;