import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'; 

const MoviesComp=(props)=>{
	const {movies}=props;
	const moviesList=movies.map(movie=>{
	    return (
	        <div className="jumbotron" key={movie.id}>
	          <Link to={'/movies/'+movie.id}>
	            <h1>{movie.title}</h1>
	          </Link>
	          <p>{movie.overview}</p>
	        </div>
	      )
	    })
	return (
	     <div className="App">
	        <h1 className="text-center custom">Movies List</h1>
	        <div className="container">
	          {moviesList}
	          <Button color="danger" onClick={()=>props.loadData()}>Load More</Button>
	        </div>
	      </div>
	    );		
}
export default MoviesComp;