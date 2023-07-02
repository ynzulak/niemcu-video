import ReactPlayer from 'react-player';

import adsPolish from '../files/lectorFiles/ads polish.wav'
import interviewCorect from '../files/lectorFiles/Interview corect.wav'
import michalNiemiec from '../files/lectorFiles/michal niemiec.wav'

import './styles/lectorPage.scss'

function LectorPage() {
    return (
        <div className="main-page">
            <div className='title-with-description'>
                <div className='title'>
                    <h1>Lektor</h1>
                </div>
                <div className='description'>
                    <span>Oprócz tworzenia filmów zajmuję się użyczaniem głosu jako lektor i realizacją nagrań dźwiękowych w różnych warunkach.  </span>
                </div>
            </div>
            <hr></hr>
            <div className='lector-container'>
                <div className='audio-files'>
                    <div className="first-row">
                        <div className='audio'>
                            <audio controls>
                                <source src={adsPolish} type="audio/mpeg" />
                                Twoja przeglądarka nie obsługuje elementu audio.
                            </audio>
                        </div>
                        <div className='audio'>
                            <audio controls>
                                <source src={interviewCorect} type="audio/mpeg" />
                                Twoja przeglądarka nie obsługuje elementu audio.
                            </audio>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className='audio'>
                            <audio controls>
                                <source src={michalNiemiec} type="audio/mpeg" />
                                Twoja przeglądarka nie obsługuje elementu audio.
                            </audio>
                        </div>
                    </div>
                </div>
                <div className='videos'>
                    <div className="first-row">
                        <div className='video-player'>
                            <ReactPlayer
                                className='react-player'
                                url="https://www.youtube.com/watch?v=PgveCWQ9NcI"
                                controls={true}
                                width='100%'
                                height='100%'

                                fallback={<div>Ładowanie</div>}
                            />
                        </div>
                        <div className='video-player'>
                            <ReactPlayer
                                className='react-player'
                                url="https://www.youtube.com/watch?v=yOV6SDDUJOA"
                                controls={true}
                                width='100%'
                                height='100%'
                                fallback={<div>Ładowanie</div>}
                            />
                        </div>
                    </div>
                    <div className="second-row">
                        <div className='video-player'>
                            <ReactPlayer
                                className='react-player'
                                url="https://www.youtube.com/watch?v=KZ7bG8vXQZY"
                                controls={true}
                                width='100%'
                                height='100%'
                                fallback={<div>Ładowanie</div>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LectorPage;