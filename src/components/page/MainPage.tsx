import React, { useEffect, useState } from "react";
import MainView from "../view/MainView";
import { Services } from "../../services/services";
import { IInfoVideo } from "../../interfaces/dataInterface";
import { Singleton } from "../../utils/patterns/observer/singleton";
import { ConcreteObserver } from "../../utils/patterns/observer/observer";
import { NotifyProps } from "../../utils/patterns/interfaces";
import useVideoData from "../../hooks/useGetInfo";

const MainPage = () => {
  // const singleton = Singleton.getInstance();
  // const services = new Services();

  // const [information, setInformation] = useState<IInfoVideo | null>({
  //   title:'',
  //   thumbnail: '',
  //   notes: [],
  // });
  // const [url, setUrl] = useState<string>("");
  // const [resolution, setResolution] = useState<string | null>("");

  const { videoInfo, loading, error, fetchVideo } = useVideoData();

  // const observer = new ConcreteObserver(({ type, value }: NotifyProps) => {
  //   if (type === "res") {
  //     return setResolution(value);
  //   }
  // });

    // useEffect(() => {
    //   singleton.attach(observer);

    //   return () => {
    //     singleton.detach(observer);
    //   };
    // });

  const onDownload = () => {
    alert("descargando!!!");
  };

  const onSearch = async (url: string) => {
    fetchVideo(url);
  };
  
  return (
    <div className="">
      <MainView
        error={error}
        onDownload={onDownload}
        onSearch={onSearch}
        loading={loading}
        information={videoInfo}
      />
    </div>
  );
};

export default MainPage;
