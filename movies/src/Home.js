import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './listAction';
import MoviesComp from './movies';  
import Shows from './shows';
import Loader from 'react-loader-spinner';

class Home extends Component {
  state = {
    Moviespage:1,
    Showspage:1
  }
  loadData=()=>{
    let page=this.state.Moviespage+1;
    this.setState({
        Moviespage:page   
    });
    this.props.LoadMore(page);
  }
  loadShows=()=>{
    let page=this.state.Showspage+1;
    this.setState({
        Showspage:page   
    });
    this.props.loadMoreShows(page);
  }
  render() {
    const {movies}=this.props;
    const {shows}=this.props;
    if(movies.length===0 || shows.length===0)
    {
      return (
          <div className="outer" >
            <div className="inner">
              <Loader type="Plane" color="yellow" height={200} width={200}/>
            </div>
          </div>
      );
    }
    return (
      <div className="test">
        <MoviesComp movies={movies} loadData={this.loadData} />
        <Shows shows={shows} loadShows={this.loadShows}/>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,actionCreators)(Home);