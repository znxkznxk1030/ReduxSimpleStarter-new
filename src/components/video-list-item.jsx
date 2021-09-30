import React from "react";

const VideoListItem = ({ video }) => {
  const snippet = video.snippet;
  const title = snippet.title;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
