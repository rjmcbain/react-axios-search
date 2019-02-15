import React, { Component } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    images: []
  };

  onSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
