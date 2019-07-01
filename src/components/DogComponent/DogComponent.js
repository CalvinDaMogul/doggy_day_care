import React from 'react';
import PropTypes from 'prop-types';
import './DogComponent.scss';
import dogShape from '../../helpers/propz/dogShape';

import Dog from '../Dog/Dog';

class DogComponent extends React.Component {
    static propTypes = {
      dogs: PropTypes.arrayOf(dogShape.dogShape),
    }

    render() {
      const { dogs } = this.props;
      const makeDogs = dogs.map(dog => (
            <Dog key={dog.dogId} dog={dog} />
      ));

      return (
            <div className="DogComponent d-flex wrap">
                { makeDogs }
            </div>
      );
    }
}

export default DogComponent;
