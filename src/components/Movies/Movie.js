import React from 'react'
import './movie.css'

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    {
                        props.poster == null ? 
                        <img 
                            src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"}
                            alt="card"
                            style={{width: "100%", height: 360, zIndex: 0}}>
                        </img> : 
                        <img 
                            src={`http://image.tmdb.org/t/p/w185${props.poster}`}
                            alt="card"
                            style={{width: "100%", height: 360, zIndex: 0}}>
                        </img>
                    }
                </div>
                <div className="card-content">
                    {/* <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span> */}
                    <p><a href="" onClick={(e) => {props.getMovieInfo(e, props.movieID); props.showMovieInfo()}}>View Details</a><i className="material-icons right">more_vert</i></p>
                    {/* <span className="card-title activator grey-text text-darken-4">View Details<i className="material-icons right">more_vert</i></span> */}

                </div>
                {/* <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                    <p>{props.overview}</p>
                </div> */}
            </div>

        </div>
    )
}

export default Movie