import React from 'react';
import { debounce } from "debounce";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // props.query = '';

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    // console.log(this.state);
    // this.props.query = e.target.value;
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });


  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
