import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PopupContext } from "../../context/PopupContext";

import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";
import CastList from "./CastList";

import MovieList from "../../components/movie-list/MovieList";
import VideosSection from "../../components/videos-section/VideosSection";

import { PlayIcon } from "../../components/videos-section/Playbtn";
import Info from "../../components/info/Info";
import Ratings from "../../components/ratings/Ratings";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [videos, setVideos] = useState([]);

  const { showPopup } = useContext(PopupContext);

  useEffect(() => {
    async function getDetail() {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);

      const res = await tmdbApi.getVideos(category, response.id);
      setVideos(res.results);
    }

    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div
            className="play-trailer"
            onClick={() => {
              let video =
                videos.find((video) => /official trailer/i.test(video.name)) ||
                videos[0];

              showPopup(video.key);
            }}
          >
            <PlayIcon />
          </div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>

              <Ratings
                voteCount={item.vote_count}
                voteAverage={item.vote_average}
              />
            </div>

            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
              <Info data={item} />
            </div>
          </div>

          {window.innerWidth < 600 && (
            <Ratings
              voteCount={item.vote_count}
              voteAverage={item.vote_average}
              mobile={true}
            />
          )}

          <div className="contentWrapper">
            <VideosSection id={item.id} loading={item} videos={videos} />
            <div className="mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={id} />
            </div>
            <div className="mb-3">
              <div className="section__header mb-2">
                <h2>Recommendations</h2>
              </div>
              <MovieList category={category} type={movieType.popular} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
