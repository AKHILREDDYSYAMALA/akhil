import React, { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCHVIDEO_API,
  YOUTUBE_VIDEO_API,
  searchApiKey,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searVideos, setSearVideos] = useState([]);

  const searchword = useSelector((store) => store.searchword.searchword);

  useEffect(() => {
    if (searchword) {
      searchVideos();
    }

    getVideos();
  }, [searchword]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const searchVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCHVIDEO_API + searchword + searchApiKey
    );

    const json = await data.json();

    setSearVideos(json.items);
  };

  if (searchword) {
    return (
      <div className="flex flex-wrap">
        {searVideos?.map((video, i) => (
          <Link key={i} to={"/watch?v=" + video.id.videoId}>
            <SearchVideoCard info={video}></SearchVideoCard>
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap">
        {videos?.map((video, i) => (
          <Link key={i} to={"/watch?v=" + video.id}>
            <VideoCard info={video}></VideoCard>
          </Link>
        ))}
      </div>
    );
  }
};

export default VideoContainer;
