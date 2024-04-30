import React, { useEffect, useState } from "react";
import MainView from "../view/MainView";
import { Services } from "../../services/services";
import { IInfoVideo } from "../../interfaces/dataInterface";
import { Singleton } from "../../utils/patterns/observer/singleton";
import { ConcreteObserver } from "../../utils/patterns/observer/observer";
import { NotifyProps } from "../../utils/patterns/interfaces";
import useVideoData from "../../hooks/useInfo";

const MainPage = () => {
  const singleton = Singleton.getInstance();
  const services = new Services();

  const [information, setInformation] = useState<IInfoVideo | null>({
    title:'',
    thumbnail: '',
    notes: [],
  });
  // const [url, setUrl] = useState<string>("");
  const [resolution, setResolution] = useState<string | null>("");

  const { loading, getVideoInfo } = useVideoData();

  const observer = new ConcreteObserver(({ type, value }: NotifyProps) => {
    if (type === "res") {
      return setResolution(value);
    }
  });

  useEffect(() => {
    singleton.attach(observer);

    return () => {
      singleton.detach(observer);
    };
  });

  const onDownload = () => {
    alert("descargando!!!");
  };

  const onSearch = async (url: string) => {
    const videoInfo = await getVideoInfo(url);
    setInformation(videoInfo);
    console.log("dataaaa: , result");
  };
  console.log("la resoulcion es: ", resolution);
  
  const prueba = information !== null ? Object.keys(information).length : 'no es'
  console.log('hola: ', prueba)

  return (
    <div className="">
      <MainView
        onDownload={onDownload}
        onSearch={onSearch}
        loading={loading}
        information={information}
      />
    </div>
  );
};

export default MainPage;
