import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message }) => (
    <div className="alert alert-danger" role="alert">
        {JSON.stringify(message)}
    </div>
);

Alert.propTypes = {
    message: PropTypes.object.isRequired
}

export default Alert;