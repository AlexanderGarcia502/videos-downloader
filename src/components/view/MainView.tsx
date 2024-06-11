import { useState } from "react";
import { IMainViewProps } from "./interfaces";

const MainView: React.FC<IMainViewProps> = ({ onSearch, children }) => {
  const [urlField, setUrlField] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    if (trimmedValue !== urlField) {
      setUrlField(trimmedValue);
      setIsDisabled(false);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col overflow-auto">
      <div className="w-full flex justify-center items-center flex-col">
        <span
          style={{
            fontFamily: "Fontdiner Swanky, cursive",
            fontWeight: "2000",
            color: "#FFFFFF",
          }}
          className="text-2xl ml-3 mr-3 mt-4 sm:mt-0 sm:ml-0 sm:mr-0 sm:text-3xl sm:mb-5 md:text-3xl lg:text-5xl mb-1 font-bold font-black text-center"
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
            className="bg-purple-500 text-base hover:bg-purple-600 text-white font-bold py-2 mb-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg ml-3 mt-3 md:mt-0"
            disabled={isDisabled}
            onClick={() => {
              setIsDisabled(true);
              onSearch(urlField);
            }}
          >
            Buscar video
          </button>
        </div>
      </div>
      <div className="w-full overflow-auto pb-4">{children}</div>
    </div>
  );
};

export default MainView;
