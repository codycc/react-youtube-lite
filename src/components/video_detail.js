import React from 'react';

const VideoDetail = ({video}) => { // passes in video
  if(!video) {  // if there isnt a video passed in then return text saying loading
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId; //grabbing video Id from the api
  const url = `https://www.youtube.com/embed/${videoId}`; // the ` ` provides an easier way to interpolate

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-response-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>  {/* grabbing title from api */}
        <div>{video.snippet.description}</div> {/* grabbing descriptiong from api */}
      </div>
    </div>
  );

};

export default VideoDetail;
