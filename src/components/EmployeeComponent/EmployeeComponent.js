import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeComponent.scss';

import Employee from '../Employee/Employee';

import employeeShape from '../../helpers/propz/employeeShape';

class EmployeeComponent extends React.Component {
    static propTypes = {
      employees: PropTypes.arrayOf(employeeShape.employeeShape),
    }

    render() {
      const { employees } = this.props;
      const makeEmployees = employees.map(employee => (
            <Employee key={employee.id} employee={employee} />
      ));

      return (
            <div className="EmployeeComponent d-flex wrap">
                { makeEmployees }
            </div>
      );
    }
}

export default EmployeeComponent;
