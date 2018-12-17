import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../../../components/Search';
import Spinner from '../../../components/Spinner';
import Alert from '../../../components/Alert';
import Card from '../../../components/Card';
import { makeSelectTVShow } from '../reselect';
import { fetchTVShows, searchTVShows } from '../actions/tvShows';
import { showDetails } from '../../Details/actions';
import { toggleApp } from '../../App/actions';

class TVShow extends Component {
  static propTypes = {
    toggleApp: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired,
    fetchTVShows: PropTypes.func.isRequired,
    searchTVShows: PropTypes.func.isRequired,
    tvShows: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  static defaultProps = {
    error: null
  }

  componentWillMount() {
    this.props.fetchTVShows();
  }

  showDetails = (type, item) => {
    this.props.showDetails(type, item);
    this.props.toggleApp();
  }

  render() {
    const { isLoading, error, tvShows, searchTVShows, fetchTVShows } = this.props;

    return (
      <div className="container">
        <Search
          onFetch={fetchTVShows}
          onSearch={searchTVShows}
        />
        { error && <Alert message={error} /> }
        { isLoading && <Spinner /> }
        <div className="card-content">
          { tvShows.map((t) => (
            <Card
              onClick={this.showDetails}
              key={t.id}
              type="TVShow"
              item={t}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToAction = (dispatch) => ({
  toggleApp: () => dispatch(toggleApp()),
  fetchTVShows: () => dispatch(fetchTVShows()),
  searchTVShows: (search) => dispatch(searchTVShows(search)),
  showDetails: (type, item) => dispatch(showDetails(type, item))
})

export default connect(makeSelectTVShow(), mapDispatchToAction)(TVShow);