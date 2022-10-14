import {movies} from '../src/data/movies'

const MovieComponent = ()=>{
    return(
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movies.map((movie)=>(
                        <li className="movie" key={movie.id}>
                            <img src={movie.poster} alt={ movie.title}/>
                            <p>
                                {movie.title} by {movie.director} was released in  {movie.year}
                            </p>
                            <p>Rating: {movie.rating}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent;
