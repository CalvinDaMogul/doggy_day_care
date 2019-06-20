import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import myDogs from './dogs';

import DogComponent from '../components/DogComponent/DogComponent';


class App extends React.Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
    <div className="App">
    <DogComponent dogs={dogs} />
    </div>
    );
  }
}

export default App;
