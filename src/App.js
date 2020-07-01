import React, {Component} from 'react';
import './App.css';

import Nav from './components/Nav/Nav'
import Search from './components/Nav/Search'
import MovieList from './components/Movies/MovieList'
import Pagination from './components/Movies/Pagination'
import MovieInfo from './components/Movies/MovieInfo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchQuery: '', 
      totalMovies: 0,
      currentPage: 1,
      clickedMovie: null,
      showMovieInfo: false
    }
    //this.apiKey = process.env.REACT_APP_API
    this.apiKey = 'a18bf155a833ab6674f6bef31d4bb61d'
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchQuery}`)
    .then(data => data.json())
    .then(data => {
      
      this.setState({movies: [...data.results], totalMovies: data.total_results})
    });
  }

  handleChange = (e) => {
    this.setState({searchQuery: e.target.value});
  }

  handlePage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchQuery}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({movies: [...data.results], currentPage: pageNumber, clickedMovie: null})
    });
  }

  getMovieInfo = (e, id) => {
    e.preventDefault();
    const filterMovie = this.state.movies.filter(movie => movie.id === id);
    const clickedMovie = filterMovie.length > 0 ? filterMovie[0] : null;

    console.log(clickedMovie)
    this.setState({clickedMovie: clickedMovie})
  }

  showMovieInfo = () => {
    this.setState({showMovieInfo: !this.state.showMovieInfo})
  }

  closeMovieInfo = () => {
    this.setState({showMovieInfo: !this.state.showMovieInfo, clickedMovie: null})
  }

  render() {
    const numPages = Math.floor(this.state.totalMovies / 20);


    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    // .then(data => data.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({movies: [...data.results], totalMovies: data.total_results})
    // });

    
    

    return (
      <div className="App">
        <Nav />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movieList={this.state.movies} showMovieInfo={this.showMovieInfo} getMovieInfo={this.getMovieInfo}/>
        {this.state.showMovieInfo ? <MovieInfo 
                                      close={this.closeMovieInfo} 
                                      clickedMovie={this.state.clickedMovie}/>
        : null
        }
        <Pagination disableButtons={this.state.showMovieInfo} numPages={numPages} nextPage={this.handlePage} currentPage={this.state.currentPage}/>
      </div>
    );
  }
}



export default App;
