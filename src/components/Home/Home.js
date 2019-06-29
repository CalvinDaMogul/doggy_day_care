import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import '/Home.scss';
import myDogs from '../Dog/Dog';
import myEmployees from '../Employee/Employee';

import DogComponent from '../DogComponent/DogComponent';
import EmployeeComponent from '../EmployeeComponent/EmployeeComponent';


class Home extends React.Component {
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
      <p id="Phrase">Where Every Dog Matters...</p>
    <DogComponent dogs={dogs} />
    <h1 id="Staff">Employees</h1>
    <EmployeeComponent employees={employees} />
    </div>
    );
  }
}

export default Home;
