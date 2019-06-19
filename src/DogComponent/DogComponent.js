import React from 'react';
import PropTypes from 'prop-types';
import './DogCorral.scss';

import Dog from '../Dog/Dog';

import dogShape from '../../helpers/propz/dogShape';

class DogCorral extends React.Component {
    static PropTypes = {
        dogs: PropTypes.arrayOf(dogShape.dogShape),
    }

    render() {
        const { dogs } = this.props;
        const makeDogs = dogs.map(goat => (
            //<h2>{dog.name}</h2>
            <Dog key={dog.id} dog={dog} />

        ));

        return (
            <div className="DogCorral d-flex wrap">
            {makeDogs}
            </div>
        );
    }
}