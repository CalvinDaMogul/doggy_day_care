import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disposition: PropTypes.isRequired,
    color: PropTypes.isRequired,
});

export default { dogShape };
