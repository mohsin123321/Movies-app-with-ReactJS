import React, { Component } from 'react';
import axios from 'axios';
import { Button,Label } from 'reactstrap'; 
import Loader from 'react-loader-spinner';

class ShowsDetails extends Component{
	state={
		show:null
	}
	redirect=(e)=>{
		this.props.history.push('/');
	}
	componentDidMount(){
		let id=this.props.match.params.id;
		axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=c5613308bdd231d0143069118fd970ff')
			 .then(res=>{
			 	this.setState({
					show:res.data
				})
			})
	}
	render(){
		let genres=null;
		let creators=null;
		if(this.state.show)
		{
			let i=1;
			genres=this.state.show.genres.map(genre=>{
				if(this.state.show.genres.length===i)
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
		    });
		    i=1;
		    creators=this.state.show.created_by.map(creator=>{
				if(this.state.show.created_by.length===i)
				{
				  return (
			        <b key={creator.id}>{creator.name} (Creator)</b> 
			      )
				}
				else
				{
					i=i+1;
				    return (
				        <b key={creator.id}>{creator.name} (Creator),</b> 
				      )
				}
		    });
		}

		const show=this.state.show ? (
			<div className="jumbotron text-center" >
				<h1>{this.state.show.name}</h1>
				<img src={'http://image.tmdb.org/t/p/w185/'+this.state.show.poster_path} alt="Show"/>
				<p><Label>First Air Date:</Label> {this.state.show.first_air_date}</p>
				<p><Label>User Score:</Label> {this.state.show.vote_average}</p>
				<p><Label>Genre:</Label> {genres} </p>
				<p><Label>Featured Crew:</Label> {creators} </p>
				<Button color="primary" size="lg" onClick={this.redirect} active>Back</Button>
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
				<h1 className="text-center custom">Show Details</h1>
				{show}
			</div>
		)
	}
}

export default ShowsDetails;