import "./info.scss";
import millify from "millify";

function Info({ data }) {
  function dateFormatus(date) {
    date = new Date(date);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function toHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours === 0) {
      return `${remainingMinutes}min`;
    }
    return `${hours}h ${remainingMinutes}min`;
  }

  return (
    <div className="containerWrapper">
      <div className="container_info">
        <div className="infos">
          {data.status && (
            <div className="infoItem">
              <span className="text bold">Status: </span>
              <span className="text">{data.status}</span>
            </div>
          )}
          {data.release_date && (
            <div className="infoItem">
              <span className="text bold">Release Date: </span>
              <span className="text">{dateFormatus(data.release_date)}</span>
            </div>
          )}
          {data.runtime && (
            <div className="infoItem">
              <span className="text bold">Runtime: </span>
              <span className="text">{toHoursAndMinutes(data.runtime)}</span>
            </div>
          )}
        </div>

        {/* {data.homepage && (
          <div className="infos">
            <div className="infoItem">
              <span className="text bold">Homepage: </span>
              <span className="text">
                <a href={data.homepage} target="_blank" rel="noreferrer">
                  {data.homepage.replace(/(https?:\/\/)/gi, "").slice(0, 35) + "..."}
                </a>
              </span>
            </div>
          </div>
        )} */}

        {data.budget >= 10000 && (
          <div className="infos">
            <div className="infoItem">
              <span className="text bold">Budget: </span>
              <span className="text">{millify(data.budget)}</span>
            </div>
            <div className="infoItem">
              <span className="text bold">Revenue: </span>
              <span className="text">{millify(data.revenue)}</span>
            </div>
          </div>
        )}

        {data?.production_companies?.length > 0 && (
          <div className="infos">
            <span className="text bold">Studios: </span>
            <span className="text">
              {/* {data?.production_companies.slice(0, 3)?.map((d, i) => (
                <span key={i}>
                  {d.name}
                  {data?.production_companies.slice(0, 3).length - 1 !== i &&
                    ", "}
                </span>
              ))} */}
              {<span>{data?.production_companies[0].name}</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
