import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import images1 from './images/imagesSlider1';
import images2 from './images/imagesSlider2';
import images3 from './images/imagesSlider3';
import images4 from './images/imagesSlider4';
import images5 from './images/imagesSlider5';
import images6 from './images/imagesSlider6';
import images7 from './images/imagesSlider7';
import images8 from './images/imagesSlider8';
import './styles/mainPagesStyles.scss'
import './styles/photosPage.scss'

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
            <div className='sliders'>
                <div data-aos="fade-up">
                    <Slider className='image-slider'  {...settings} >
                        {images1.map((slide, index) => (
                            <div className='slider-container images-big' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images2.map((slide, index) => (
                            <div className='slider-container images-big' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images3.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images4.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images5.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images6.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images7.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div data-aos="fade-up">
                    <Slider className='image-slider' {...settings}>
                        {images8.map((slide, index) => (
                            <div className='slider-container images-medium' key={index}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PhotosPage;