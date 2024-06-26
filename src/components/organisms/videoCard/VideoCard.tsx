import { IVideoCard } from "../../view/interfaces";

const VideoCard: React.FC<IVideoCard> = ({ information, onDownload }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4 w-11/12 max-w-full md:max-w-6xl">
      <img
        src={information?.thumbnail}
        alt={information?.title}
        className="w-full h-40 sm:h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {information?.title}
        </h2>
        <div className="mt-2 flex flex-wrap">
          {information?.notes.map((option, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 mb-2"
              onClick={() => onDownload({ resolution: option, format: "mp4" })}
            >
              {option}
            </button>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => onDownload({ format: "mp3" })}
          >
            MP3
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
