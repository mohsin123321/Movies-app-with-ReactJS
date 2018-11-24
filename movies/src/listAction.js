import axios from 'axios';
export function loadMovies(){
	return (dispatch)=>{
		return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c5613308bdd231d0143069118fd970ff&page=1&primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-10-22')
         .then((res)=>{
         	dispatch({type:'Initialize',movies:res.data.results.slice(0,10)});
         })	
	}
}
export function LoadMore(page){
	return (dispatch)=>{
		return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c5613308bdd231d0143069118fd970ff&page='+page+'&primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-10-22')
         .then((res)=>{
         	dispatch({type:'AddMore',movies:res.data.results.slice(0,10)});
         })	
	}
}
export function loadShows(){
	return (dispatch)=>{
		return axios.get('https://api.themoviedb.org/3/discover/tv?api_key=c5613308bdd231d0143069118fd970ff&page=1&primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-10-22')
         .then((res)=>{
         	dispatch({type:'InitializeShows',shows:res.data.results.slice(0,10)});
         })	
	}
}
export function loadMoreShows(page){
	return (dispatch)=>{
		return axios.get('https://api.themoviedb.org/3/discover/tv?api_key=c5613308bdd231d0143069118fd970ff&page='+page+'&primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-10-22')
         .then((res)=>{
         	dispatch({type:'AddShows',shows:res.data.results.slice(0,10)});
         })	
	}
}