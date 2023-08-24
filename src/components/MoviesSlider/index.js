import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import MovieItem from '../MovieItem'

const MoviesSlider = props => {
    const {actionMoviesList} = props
    
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    return(
        <>
            <Slider {...settings}>
                {actionMoviesList.map(eachMovie => <MovieItem key={eachMovie.id} movieDetails={eachMovie} />)}
            </Slider>
        </>
    )
}

export default MoviesSlider