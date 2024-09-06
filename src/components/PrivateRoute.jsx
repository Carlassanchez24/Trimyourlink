import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    return children; // No verifica el token
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
