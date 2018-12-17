import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appSelector } from './reselect';
import Content from '../Content';
import Details from '../Details';

const App = ({ value }) => (
    <div className="container">
        {value ? <Content /> : <Details />}
    </div>
);

App.propTypes = {
  value: PropTypes.bool.isRequired
}

export default connect(appSelector())(App);