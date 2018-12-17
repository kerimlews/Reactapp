import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    static propTypes = {
        onFetch: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    };

    state = {
        search: '',
        isFetched: false
    }

    handleChangeValue = (search) => {
        const { onFetch, onSearch } = this.props;
        const { isFetched } = this.state;
        this.setState({ search });

        const length = search.length;
        if (length > 3) {
            this.setState({ isFetched: true });
            onSearch(search);
        }
        if (isFetched && length <= 3) {
            this.setState({ isFetched: false });
            onFetch();
        }
    }

    render() {
        const { search } = this.state;
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="form-group col-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        value={search}
                        onChange={(event) => this.handleChangeValue(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}
