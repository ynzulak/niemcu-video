import muzykaFilmowa from '../files/images/graphicsPage/muzykaFilmowa.png'
import muzykaPolska from '../files/images/graphicsPage/muzykaPolska.png'
import muzyka2020 from '../files/images/graphicsPage/muzyka2020.png'
import zyczeniaSanok from '../files/images/graphicsPage/zyczeniaSanok.png'
import logoWieksze from '../files/images/graphicsPage/logoWieksze.jpg'
import logoMniejsze from '../files/images/graphicsPage/logoMniejsze.jpg'

import './styles/graphicsPage.scss'

function GraphicsPage() {
    return (
        <div className="main-page">
            <div className='title-with-description'>
                <div className='title'>
                    <h1>Grafika</h1>
                </div>
                <div className='description'>
                    <span>Zajmuję się również tworzeniem i projektowaniem wszelkiego rodzaju grafik. </span>
                </div>
            </div>
            <hr></hr>
            <div className="graphics-content">
                <div className="graphics">
                    <div className="graphic" data-aos="fade-up">
                        <img src={muzykaFilmowa} alt='' />
                    </div>
                    <div className="graphic" data-aos="fade-up" data-aos-delay="200">
                        <img src={muzykaPolska} alt='' />
                    </div>
                    <div className="graphic" data-aos="fade-up">
                        <img src={muzyka2020} alt='' />
                    </div>
                    <div className="graphic" data-aos="fade-up">
                        <img src={zyczeniaSanok} alt='' />
                    </div>
                    <div className="graphic" data-aos="fade-up">
                        <img src={logoWieksze} alt='' />
                    </div>
                    <div className="graphic" data-aos="fade-up">
                        <img src={logoMniejsze} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicsPage;