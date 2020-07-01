import React from 'react'
import Movie from './Movie'

const MovieList = (props) =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movieList.map((movie, i) => {
                            return(
                                <Movie key={movie.id} movieID={movie.id} showMovieInfo={props.showMovieInfo} getMovieInfo={props.getMovieInfo} title={movie.title} poster={movie.poster_path} overview={movie.overview}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
