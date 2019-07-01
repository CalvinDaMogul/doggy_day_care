import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.json;

const getEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((res) => {
      const employees = [];
      Object.keys(res.data).forEach((fbKey) => {
        employees.push(res.data[fbKey]);
      });
      resolve(employees);
    })
    .catch(err => reject(err));
});

export default { getEmployees };
