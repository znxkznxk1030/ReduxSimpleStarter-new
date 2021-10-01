import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "./config";

import YTSearch from "youtube-api-search";

import VideoList from "./components/video-list";
import SearchBar from "./components/search-bar";
import VideoDetail from "./components/video-detail";

// Create a new component. this component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={video => this.setState({ selectedVideo:  video })}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
