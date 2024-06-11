import { useState } from "react";
import { Services } from "../services/services";
import { IInfoVideo } from "../interfaces/dataInterface";

const useVideoInfo = () => {
  const services = new Services();

  const [videoInfo, setVideoInfo] = useState<IInfoVideo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideo = async (network: string, url: string) => {
    try {
      setLoading(true);
      setVideoInfo(null);
      setError(null);
      const result = await services.getVideoInformation(network, url);
      setVideoInfo(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { videoInfo, loading, error, fetchVideo };
};

export default useVideoInfo;
