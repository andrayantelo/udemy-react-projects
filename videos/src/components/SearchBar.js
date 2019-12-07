import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm, searchVideos } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount = () => {
        this.inputRef.current.focus();
        this.props.searchVideos(this.props.searchTerm);
    }

    onInputChange = (event) => {
        this.props.updateSearchTerm(event.target.value);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchVideos(this.props.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                   <div className="field">
                       <label>Video Search</label>
                       <input
                            type="text"
                            value={this.props.searchTerm}
                            onChange={this.onInputChange}
                            ref={this.inputRef}
                       />
                   </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { searchTerm : state.searchTerm }
}

export default connect(
    mapStateToProps,
    { updateSearchTerm, searchVideos }
)(SearchBar);