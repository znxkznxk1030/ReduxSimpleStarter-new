import React from "react";

const VideoListItem = (props) => {
  const title = props.video.snippet.title;
  return <li>{title}</li>;
};

export default VideoListItem;
