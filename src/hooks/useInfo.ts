import { useState } from "react";
import { Services } from "../services/services";

const useVideoInfo = () => {
  const services = new Services();
  const [loading, setLoading] = useState<boolean | undefined>();

  const getVideoInfo = async (url: string) => {
    setLoading(true);

    const result = await services.getVideoData(url);
    if (!result) {
      setLoading(false);
      return null;
    } else {
      setLoading(false);
      return result.data;
    }
  };
  return { loading, getVideoInfo };
};

export default useVideoInfo;
