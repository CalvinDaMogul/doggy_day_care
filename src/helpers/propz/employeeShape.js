import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  employeeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
});

export default { employeeShape };
