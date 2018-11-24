import React from 'react';
import { Link } from 'react-router-dom'; 
import {Button} from 'reactstrap';
const ShowsComp=(props)=>{
	const {shows}=props;
	const showsList=shows.map(show=>{
	    return (
	        <div className="jumbotron" key={show.id}>
	          <Link to={'/shows/'+show.id}>
	            <h1>{show.name}</h1>
	          </Link>
	          <p>{show.overview}</p>
	        </div>
	      )
	    })
	return (
	      <div className="shows">
	        <h1 className="text-center custom">Shows List</h1>
	        <div className="container">
	          {showsList}
	          <Button color="danger" onClick={()=>props.loadShows()}>Load More</Button>
	        </div>
	      </div>
	    );		
}
export default ShowsComp;