import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import images from './images';
import './styles/mainPagesStyles.scss'

function PhotosPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="main-page">
            <div className='title-with-description'>
                <div className='title'>
                    <h1>Zdjęcia</h1>
                </div>
                <div className='description'>
                    <span>Nie samym filmowaniem żyję. Zajmuję się także fotografią. Głównie tworzę fot-relacje z imprez okolicznościowych.</span>
                </div>
            </div>
            <hr></hr>
            <Slider className='image-slider' {...settings}>
                {images.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PhotosPage;