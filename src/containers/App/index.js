import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appSelector } from './reselect';

const App = ({ value }) => (
    <div id="app" className="app">
        <div id="cl">
            {JSON.stringify(value)}
        </div>
    </div>
);

App.propTypes = {
  value: PropTypes.bool.isRequired
}

export default connect(appSelector())(App);