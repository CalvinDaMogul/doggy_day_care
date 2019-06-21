import React from 'react';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';


class Dog extends React.Component {
    static propTypes = {
      dog: dogShape.dogShape,
    }

    render() {
      const { dog } = this.props;
      return (
          <div className="dog col-3">
              <div className="card">
                  <h5 className="card-title">Name: {dog.name}</h5>
              <img src={dog.imageUrl} className="card-img-top" alt=""/>
              <div className="card-body">
                  <p className="card-text">Gender: {dog.gender}</p>
                  <p className="card-text">Trait: {dog.trait}</p>
              </div>
              </div>
          </div>

      );
    }
}


export default Dog;
