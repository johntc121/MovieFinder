import React from 'react';
import './movie.css'

const MovieInfo = (props) => {
    if(props.clickedMovie != null) {

   
        return(
            
            <div className="container info">
                <div className="info-inner">
                    {/* <div className="row">
                        <div className="col s10 offset-s1">
                            <div className="card horizontal">
                                {/* <div className="card-image">
                                    {
                                        props.clickedMovie.poster_path === null ? 
                                        <img 
                                            src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"}
                                            alt="card"
                                            style={{width: "100%", height: 360}}>
                                        </img> : 
                                        <img 
                                            src={`http://image.tmdb.org/t/p/w185${props.clickedMovie.poster_path}`}
                                            alt="card"
                                            style={{width: "100%", height: 360}}>
                                        </img>
                                    }
                                </div> *************
                                <div className="card-content">
                                    <h1>{props.clickedMovie.title}</h1>
                                    <p>{props.clickedMovie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <h3>{props.clickedMovie.title}</h3>
                    <p>Released: {props.clickedMovie.release_date}</p>
                    <p>Movie Score: {props.clickedMovie.vote_average}</p>
                    <p>{props.clickedMovie.overview}</p>
                    <button onClick={props.close}>Close Me</button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default MovieInfo