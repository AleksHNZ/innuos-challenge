import { useEffect, useState } from "react";
import Album from "../Album/album";
import '../../styles/css/main.css'

const Data = () => {
  return fetch("albums.json").then((response) => response.json());
};

const Home = () => {
  const [data, setData] = useState([]);
  const [Source, setSelectedSource] = useState("");
  const [showAlbums, setShowAlbums] = useState(false);

  useEffect(() => {
    if (showAlbums) {
      Data().then(function (json) {
        let filtData = json;

        if (Source !== "") {
          filtData = json.filter(
            (album) => album.source === Source
          );
        }

        setData(filtData);
      });
    }
  }, [Source, showAlbums]);

  const handleSourceChange = (i) => {
    setSelectedSource(i.target.value);
  };

  return (
    <div className="main-container">
      {!showAlbums && (
        <button className="main-container__button" type="button" onClick={(i) => setShowAlbums(true)}>
          GET ALBUMS
        </button>
      )}
      {showAlbums && (
        <div className="albums-page">
          <div className="filter-list">
            <label>Filter by:</label>

            <select name="source" id="source" onChange={handleSourceChange}>
              <option value="All">All</option>
              <option value="LOCAL">Local</option>
              <option value="QOBUZ">Qobuz</option>
            </select>
          </div>


          <div className="albums-list">
            {data &&
              data.length > 0 &&
              data.map((album) => <Album key={album.id} album={album} />)}
          </div>
        </div>
      )}
  </div>
  );
};

export default Home;
