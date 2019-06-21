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
      <h1 id="Doggy">Doggy Day Care</h1>
    <DogComponent dogs={dogs} />
    <h1 id="Staff">Employees</h1>
    <EmployeeComponent employees={employees} />
    </div>
    );
  }
}

export default App;
