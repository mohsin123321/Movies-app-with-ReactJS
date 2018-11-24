import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import ShowsDetails from './ShowsDetails';
import * as actionCreators from './listAction';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount()
  {
    this.props.loadMovies();
    this.props.loadShows();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} /> 
          <Route path='/movies/:id' component={Details} /> 
          <Route path='/shows/:id' component={ShowsDetails} /> 
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,actionCreators)(App);
