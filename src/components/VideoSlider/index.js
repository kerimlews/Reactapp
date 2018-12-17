import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoSlider extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    state = {
        index: 0
    }

    prev = () => {
        if (this.state.index === 0)
          this.setState({ index: this.props.items.length - 1 });
        else
            this.setState({ index: this.state.index - 1 });
    }

    next = () => {
        if (this.state.index === this.props.items.length - 1)
            this.setState({ index: 0 });
        else
            this.setState({ index: this.state.index + 1 });
    }
      
    render() {
        const { index } = this.state;
        const { items } = this.props;

        return (
            <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    { items.map((i, ind) => (
                        <div key={i.id} className={`carousel-item h-100 ${ind    === index ? 'active' : ''}`}>
                            <iframe
                                style={{ height: 400 }}
                                className="d-block w-100"
                                src={`https://www.youtube.com/embed/${i.key}`}
                            />
                        </div>
                    )) }
                    </div>
                    <a onClick={this.prev} className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a onClick={this.next} className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
            </div>

        );
    }
}

export default VideoSlider;