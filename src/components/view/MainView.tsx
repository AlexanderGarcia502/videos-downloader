import { useState } from "react";
import { IMainViewProps } from "./interfaces";
import VideoCard from "../organisms/videoCard/VideoCard";
import Loading from "../molecules/Loading";
import ErrorMessage from "../molecules/ErrorMessage";

const MainView: React.FC<IMainViewProps> = ({
  onDownload,
  onSearch,
  loading,
  information,
  error,
}) => {
  const [urlField, setUrlField] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlField(event.target.value.trim());
  };
  const onSearchVideo = () => {
    onSearch(urlField);
  };
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{
        maxWidth: 1200,
        marginRight: "auto",
        marginLeft: "auto",
        height: "100vh",
      }}
    >
      <div className="w-full flex justify-center items-center flex-col">
        <span
          style={{
            fontFamily: "Fontdiner Swanky, cursive",
            fontWeight: "2000",
            color: "#FFFFFF",
          }}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl mb-1 sm:mb-5 font-bold font-black"
        >
          Descarga tus videos en HD
        </span>
        <div className="w-full flex flex-wrap justify-center">
          <input
            className="bg-white text-black-600 placeholder-gray-500 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 
            w-11/12 md:w-2/4 lg:h-14 lg:text-lg xl:w-4/5 xl:h-14 xl:text-xl"
            type="text"
            name="link"
            id=""
            value={urlField}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Agregar enlace"
          />
          <button
            className="bg-purple-500 text-base hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg ml-3 mt-3 md:mt-0"
            onClick={onSearchVideo}
          >
            Buscar video
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        {information === null && loading && <Loading mt="3" />}
        {information === null && !loading && (
          <ErrorMessage message={error} className="mt-3" />
        )}
        {information !== null && !loading && (
          <VideoCard onDownload={onDownload} information={information} />
        )}
      </div>
    </div>
  );
};

export default MainView;
