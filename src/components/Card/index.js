import React from 'react';
import PropTypes from 'prop-types';
import VideoSlider from '../VideoSlider';
import Spinner from '../Spinner';

function renderHeader(videos, img) {
    const hasVideos = videos != null && videos.length > 0;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${img}`;

    if (!hasVideos)
        return <img
            className="card-img-top img m-auto"
            src={imgUrl}
            alt="Poster"
        />

    return <VideoSlider
            items={videos}
        />
}

const Card = ({ type, isLoading, item, onClick, videos, isDetailCard }) => (
    <div className="card" onClick={() => !isDetailCard ? onClick(type, item) : null}>
    { isLoading ? <Spinner /> : renderHeader(videos, item.poster_path) }
    <div className="card-body">
      <div className="card-text card-title-text">
        { isDetailCard
            ? <h1>{item.title || item.name}</h1>
            : <span>{item.title || item.name}</span>}
      </div>
        { isDetailCard && <div>
            <span>{type === 'Movies' ? 'Movie' : 'TVShow'} overview:</span>
            <p>{item.overview}</p>
        </div> }
    </div>
  </div>
);

Card.propTypes = {
    type: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    isDetailCard: PropTypes.bool,
    videos: PropTypes.array,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
};

Card.defaultProps = {
    type: null,
    videos: null,
    onClick: null,
    isLoading: false,
    isDetailCard: false
};

export default Card;