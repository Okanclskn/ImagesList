import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import unsplashAPI from "./api/unsplashAPI";
import ImageList from "./components/imageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  searchTerm = async (term) => {
    const response = await unsplashAPI.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onformsubmit={(text) => this.searchTerm(text)}></SearchBar>
        <ImageList imageslist={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
