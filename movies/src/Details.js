import React, { Component } from 'react';
import axios from 'axios';
import { Button,Label } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import Loader from 'react-loader-spinner';

class Details extends Component{
	state={
		movie:null
	}
	redirect=(e)=>{
		e.preventDefault();
		this.props.history.push('/');
	}
	componentDidMount(){
		let id=this.props.match.params.id;
		axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=c5613308bdd231d0143069118fd970ff')
			 .then(res=>{
			 	this.setState({
					movie:res.data
				})
			})
	}
	render(){
		let genres=null;
		if(this.state.movie)
		{
			let i=1;
			genres=this.state.movie.genres.map(genre=>{
				if(this.state.movie.genres.length===i)
				{
				  return (
			        <b key={genre.id}>{genre.name}</b>
			      )
				}
				else
				{
					i=i+1;
				    return (
				        <b key={genre.id}>{genre.name},</b>
				      )
				}
		    })
		}
		const movie=this.state.movie ? (
			<div className="jumbotron text-center" >
				<h1>{this.state.movie.title}</h1>
				<img src={'http://image.tmdb.org/t/p/w185/'+this.state.movie.poster_path} alt="Movie"/>
				<p><Label>Release Data:</Label> {this.state.movie.release_date}</p>
				<p><Label>Budget: </Label>  {this.state.movie.budget}</p>
				<p><Label>Revenue:</Label>   {this.state.movie.revenue}</p>
				<p><Label>UserScore:</Label> {this.state.movie.vote_average}</p> 
				<p><Label>Genre:</Label> {genres}</p>
				<Link to={'/'}>
					<Button color="primary" size="lg" active>Back</Button>
				</Link>
			</div>
			):(
			<div className="outer" >
	            <div className="inner">
	              <Loader type="Audio" color="green" height={200} width={200}/>
	            </div>
	        </div>
		)
		return (
			<div className="container">
				<h1 className="text-center custom">Movie Details</h1>
				{movie}
			</div>
		)
	}
}

export default Details;