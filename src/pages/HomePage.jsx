import './styles/homePage.scss'
import main from '../files/images/homePage/main.jpg'

function HomePage() {
    return (
        <div className="main">
            <div className="title-with-photo" data-aos="fade-up"  data-aos-delay="200">
                <div className="title">
                    <div className="welcome-panel">
                        <div className="heading">
                            <h1>Michał Niemiec</h1>
                        </div>
                        <div className="heading-footer">
                            <h2>Filmy tworzone z pasją</h2>
                        </div>
                    </div>
                    <div className="welcome-photo">
                        <div className="welcome-img">
                            <img src={main} alt='Michal Niemiec - Fotograf' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="description" data-aos="fade-down"  data-aos-delay="500">
                <p>Nazywam się Michał "Niemcu" Niemiec zajmuję się filmowaniem, fotografią, realizacją nagrań audio, grafiką  i użyczaniem głosu jako lektor. Jeżeli jesteś zainteresowany współpracą, to zapraszam do kontaktu.</p>
            </div>
        </div>
    )
}

export default HomePage;