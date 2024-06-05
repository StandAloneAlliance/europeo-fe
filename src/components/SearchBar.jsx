import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Add your search logic here
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;