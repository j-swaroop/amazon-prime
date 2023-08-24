import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
    const {moviesList} = props

    const actionMovies = moviesList.filter(eachMovie => eachMovie.categoryId === "ACTION")
    const comedyMovies = moviesList.filter(eachMovie => eachMovie.categoryId === "COMEDY")
    
    return(
        <div className="bg-container">
            <img alt="prime video" className="prime-img"
                src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png" />
            <div className="movies-container">
                <h1 className="heading"> Action Movies</h1>
                <MoviesSlider actionMoviesList={actionMovies} />
            </div>

             <div className="movies-container">
                <h1 className="heading"> Comedy Movies</h1>
                <MoviesSlider actionMoviesList={comedyMovies} />
            </div>
            
        </div>
    )
}

export default PrimeVideo