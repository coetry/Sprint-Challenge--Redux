import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getSmurfs } from '../actions/'
import Smurfs from './Smurfs'
import AddSmurfForm from './AddSmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 
  componentDidMount() {
    this.props.getSmurfs()
  }
  
  render() {
    return (
      <div className="App">
        <Smurfs /> 
        <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: null
})

export default connect(mapStateToProps, { getSmurfs })(App);
