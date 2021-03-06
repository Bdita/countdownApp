import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 31, 2018',
      newDeadline: '',
    }
  }
  changeDeadline() {
    // console.log('state', this.state);
    this.setState({ deadline: this.state.newDeadline})
  }
  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="Clock-days"> 14 days </div>
          <div className="Clock-hours"> 30 hours </div>
          <div className="Clock-minutes"> 20 minutes </div>
          <div className="Clock-seconds"> 20 seconds </div>
        </div>
        <input placeholder='new date' onChange={event => this.setState({ newDeadline: event.target.value})}/>
        <button onClick={() => this.changeDeadline() }>Submit</button>
      </div>
    )
  }
}

export default App;
