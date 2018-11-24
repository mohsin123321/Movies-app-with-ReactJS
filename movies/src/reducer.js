const initState={
	movies:[],
	shows:[]
}

const reducer=(state=initState,action) =>{
	if(action.type === 'Initialize')
	{
         return{
         	...state,
         	movies:action.movies
         }
	}
	if(action.type === 'InitializeShows')
	{
         return{
         	...state,
         	shows:action.shows
         }
	}
	if(action.type === 'AddShows')
	{
		let newShows=[...state.shows,...action.shows];
		return{
         	...state,
         	shows:newShows
         }
	}
	if(action.type==='AddMore')
	{
		let newMovies=[...state.movies,...action.movies];
		return{
         	...state,
         	movies:newMovies
         }	
	}
	return state;
}


export default reducer;