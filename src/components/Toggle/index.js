import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ value, onToggle }) => (
    <div className="row form-group">
        <div className="btn-group btn-group-toggle mt-4" data-toggle="buttons">
            <button className={`btn btn-outline-secondary ${value ? 'active' : '' }`} onClick={() => onToggle(true)} >
                Movies
            </button>
            <button className={`btn btn-outline-secondary ${!value ? 'active' : '' }`} onClick={() => onToggle(false)} >
                TV Shows
            </button>
        </div>
    </div>
);

Toggle.propTypes = {
    value: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Toggle;