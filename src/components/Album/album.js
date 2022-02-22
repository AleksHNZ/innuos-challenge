const Cover = (a) => {
    if (a.cover === null) {
      return "./images/undefined_album_cover.png";
    }
    return "./covers/" + a.cover;
  };

  const Album = ({ album }) => {
    return (
      <div className="album-container">
        <img src={Cover(album)} alt="Album Cover" />
        {album.source === "QOBUZ" && (
          <img src={"./images/qobuz.png"} alt="sourceimage" className="album-container__qobuz" />
        )}
        <div className="album-container__text">
        <p>{album.album}</p>
        <p>{album.artist}</p>
        </div>
      </div>
    );
  };

  export default Album;
