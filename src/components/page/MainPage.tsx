import { useState } from "react";
import MainView from "../view/MainView";
import { Services } from "../../services/services";
import useVideoData from "../../hooks/useGetInfo";

const MainPage = () => {
  const services = new Services();

  const [link, setLink] = useState<string>("");

  const { videoInfo, loading, error, fetchVideo } = useVideoData();

  const onDownload = (resolution: string) => {
    services.downloadVideo({ link, resolution });
  };

  const onSearch = async (url: string) => {
    fetchVideo(url);
    setLink(url);
  };

  return (
    <div>
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
