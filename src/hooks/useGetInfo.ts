import { useState } from "react";
import { Services } from "../services/services";
import { IInfoVideo } from "../interfaces/dataInterface";

//loading
//si hay errror mandar el mensaje de error
//si hay data que mande la data

const useVideoInfo = () => {
  const services = new Services();

  const [videoInfo, setVideoInfo] = useState<IInfoVideo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideo = async (url: string) => {
    try {
      setLoading(true);
      const result = await services.getVideoInformation(url);
      setVideoInfo(result);
    } catch (error: any) {
      console.log('error: ', error.Error)
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { videoInfo, loading, error, fetchVideo };
};

export default useVideoInfo;
