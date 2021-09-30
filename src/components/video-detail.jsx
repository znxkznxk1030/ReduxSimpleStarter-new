import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return null;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-reponsive-16by9">
        <iframe
          src={url}
          frameborder="0"
          className="embed-responsive-item"
        ></iframe>
      </div>

      <div className="details">
        <div> {video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
