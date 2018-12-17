import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { makeSelectDetails } from './reselect';
import { fetchVideos } from './actions';
import { toggleApp } from '../App/actions';
import { onToggle } from '../Content/actions/content';

class Details extends Component {
    static propTypes = {
        fetchVideos: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired,
        item: PropTypes.object.isRequired,
        videos: PropTypes.array.isRequired,
        error: PropTypes.object
    }
      
    static defaultProps = {
        error: null
    }

    componentWillMount() {
        this.props.fetchVideos(this.props.item.id, this.props.type);
    }

    goBack = () => {
        this.props.toggleApp();
        this.props.toggleContent(this.props.type === 'Movies');
    }

    render() {
        const { item, videos, isLoading, type } = this.props;

        return (
            <div className="container">
                <div className="form-group mt-4">
                <button
                    onClick={this.goBack}
                    className="btn btn-outline-secondary"
                >
                    <i className="fa fa-arrow-left"/>
                    Back
                </button>
                </div>
                <div>
                    <Card
                        type={type}
                        item={item}
                        videos={videos}
                        isLoading={isLoading}
                        isDetailCard
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToActions = (dispatch) => ({
    fetchVideos: (id, type) => dispatch(fetchVideos(id, type)),
    toggleApp: () => dispatch(toggleApp()),
    toggleContent: (value) => dispatch(onToggle(value))
})

export default connect(makeSelectDetails(), mapDispatchToActions)(Details);