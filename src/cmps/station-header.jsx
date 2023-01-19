export function StationHeader({ station }) {
    return (
        <section className="station-header">
            <div className="img-container"
                style={{
                    backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: '200px', height: '200px'
                }}>
            </div>
            <div className="info-container">
            <p className="playlist">playlist</p>
            <h1>{station.name}</h1>
            <p>{station.createdBy.fullname}</p>
            </div>
        </section>
    )
}