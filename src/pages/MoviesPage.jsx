import ReactPlayer from 'react-player';

import './styles/moviesPage.scss'

function MoviesPage() {

    return (
        <div className="main-page">
            <div className='title-with-description'>
                <div className='title'>
                    <h1>Filmy</h1>
                </div>
                <div className='description'>
                    <span>Zajmuję się produkcją wideo relacji, wywiadów, filmów promocyjnych i reklamowych oraz teledysków.</span>
                </div>
            </div>
            <hr></hr>
            <div className='movies'>
                <div className='videos'>
                    <div className='video-player' data-aos="flip-left">
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=6B6_XZfv8vM&t"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=6JGWdqIQjTc"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=HQn8GA4j7XI"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=4lvBYbiH9_Y"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=f20RglCB49s"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=yE0uewqSMHE"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=TFPCquTmTRw"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=SC8W3dJtR-8&t"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=TI-432Y9jdU"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=QtkOmxxp1Xs"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=knfj0_d50dI"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=tl_wuhexoDQ"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=Q3RlQT4GbG4"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=ZZB0ryAtjs8"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=Zx0NrCOsDig&t"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video-player' data-aos="flip-left" >
                        <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=d0Qg9kfgoJA"
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesPage;