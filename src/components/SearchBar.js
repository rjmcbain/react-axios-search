import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onSubmit = e => {
    e.preventDefault();

    // const { term } = this.state;

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Images"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
