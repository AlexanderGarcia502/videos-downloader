import { IVideoCard } from "../../view/interfaces";

const VideoCard: React.FC<IVideoCard> = ({ data }) => {


  return (
    <div
    style={{
      width: 800,
      backgroundColor: "#dbdbdb",
      borderColor: "black",
      display: "flex",
    }}
  >
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h4 style={{ color: "red" }}>{data?.title}</h4>
      <img
        style={{ width: "80%", height: "70%" }}
        src={data?.thumbnail}
        alt=""
      />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h4>resoluciones disponibles</h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data?.notes.map((note: string, index: number) => (
          <button style={{ marginBottom: 7 }} key={`${note} ${index}`}>
            {note}
          </button>
        ))}
      </div>
    </div>
  </div>
  )
};

export default VideoCard;
