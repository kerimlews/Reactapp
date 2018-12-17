import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeSelectContent } from './reselect';
import TVShows from './components/TVShows';
import Movies from './components/Movies';
import Toggle from '../../components/Toggle';
import { onToggle } from './actions/content';

const Content = ({ toggle, onToggle }) => (
    <div>
    <Toggle value={toggle} onToggle={onToggle} />
    { toggle ? <Movies /> : <TVShows /> }
  </div>
);

Content.propTypes = {
    toggle: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
}

const mapDispatchToActions = (dispatch) => ({
    onToggle: (value) => dispatch(onToggle(value))
})

export default connect(makeSelectContent(), mapDispatchToActions)(Content);