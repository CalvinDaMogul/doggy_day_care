import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import myDogs from './dogs';
import myEmployees from './employees';

import DogComponent from '../components/DogComponent/DogComponent';
import EmployeeComponent from '../components/EmployeeComponent/EmployeeComponent';


class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  };

  componentDidMount() {
    this.setState({ dogs: myDogs, employees: myEmployees });
  }

  render() {
    const { dogs, employees } = this.state;
    return (
    <div className="App">
    <DogComponent dogs={dogs} />
    <EmployeeComponent employees={employees} />
    </div>
    );
  }
}

export default App;
