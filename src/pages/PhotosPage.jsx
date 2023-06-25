import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import images1 from './images/imagesSlider1';
import images2 from './images/imagesSlider2';
import images3 from './images/imagesSlider3';
import images4 from './images/imagesSlider4';
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
                {images1.map((slide, index) => (
                    <div className='slider-container images-horizontally' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images2.map((slide, index) => (
                    <div className='slider-container images-horizontally' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images3.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images4.map((slide, index) => (
                    <div className='slider-container images-horizontally' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images2.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images2.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images2.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>
            <Slider className='image-slider' {...settings}>
                {images2.map((slide, index) => (
                    <div className='slider-container' key={index}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default PhotosPage;