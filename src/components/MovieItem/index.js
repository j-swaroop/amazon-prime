import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
    const {movieDetails} = props
    
    return(
        <div className="tumbnail-container">
            <Popup
                modal 
                trigger={
                    <img src={movieDetails.thumbnailUrl} className="thumbnail-img"
                    alt="thumbnail" />
                }
                className="popup-content"
            >
                {close => (
                    <div className="modal-container">  
                        <button data-testid="closeButton" className="close-btn" onClick={() => close()} >
                            <IoMdClose size={18} onClick={() => close()} />
                        </button>
                        <div>
                            <ReactPlayer url={movieDetails.videoUrl} controls />
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}

export default MovieItem