import React, { Component } from 'react';
import User from './components/User';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://tk-whatsapp.herokuapp.com/messages`)
      .then(result => {
        return result.json();
      })
      .then(response => {
        console.log(response)
        this.setState({
          data: response
        })
        console.log(this.state.data)
      })
  }
  render() {
    return (
      <div>
        {this.state.data.map(e => {
          return (
            <User name={e.name} number={e.number} chat={e.firstLine} time={e.time} />
          )
        }

        )
        }
      </div>
    );
  }
}

export default App;