import { useState } from "react";
import MainView from "../view/MainView";
import useVideoData from "../../hooks/useGetInfo";
import SuccessTextWithLogo from "../molecules/SuccessTextWithLogo";
import Modal from "../organisms/modal/Modal";
import Loading from "../molecules/Loading";
import ErrorMessage from "../molecules/ErrorMessage";
import VideoCard from "../organisms/videoCard/VideoCard";
import Spinner from "../organisms/spinner/Spinner";
import useDownload from "../../hooks/useDownload";

interface IDownload {
  resolution?: string;
  format: string;
}

const MainPage = () => {
  const [link, setLink] = useState<string>("");

  const { videoInfo, loading, error, fetchVideo } = useVideoData();

  const {
    loading: loadingDownload,
    download,
    downloadMp3,
    error: errorWhenDownload,
    cancelRequest,
  } = useDownload();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const onDownload = async ({ resolution, format }: IDownload) => {
    if (format === "mp4") {
      setOpenModal(true);
      await download({ link, resolution });
    } else {
      setOpenModal(true);
      await downloadMp3({ link });
    }
  };

  const onSearch = async (url: string) => {
    setLink(url);
    await fetchVideo("youtubes", url);
  };

  const onAction = () => {
    if (loadingDownload) {
      cancelRequest();
    }
    setOpenModal(false);
  };
  return (
    <MainView onSearch={onSearch}>
      <Modal
        onAction={onAction}
        show={openModal}
        title={
          loadingDownload
            ? "Espere un momento"
            : error || errorWhenDownload
            ? "Se produjo un error"
            : "Descargado"
        }
        buttonName={loadingDownload ? "Cancelar" : "Cerrar"}
      >
        {loadingDownload && <Spinner />}
        {loadingDownload === false && (
          <div className="flex justify-center">
            {error !== null && error !== "Se ha cancelado la descarga." ? (
              <p className="text-red-400 text-2xl font-semibold">{error}</p>
            ) : null}
            {errorWhenDownload !== null ? (
              <p className="text-red-400 text-2xl font-semibold">
                {errorWhenDownload}
              </p>
            ) : null}
            {error === null && errorWhenDownload === null && (
              <SuccessTextWithLogo />
            )}
          </div>
        )}
      </Modal>
      <div className="flex justify-center">
        {videoInfo === null && loading && <Loading mt="3" />}
        {videoInfo === null && !loading && (
          <ErrorMessage message={error} className="mt-3" />
        )}
        {videoInfo !== null && !loading && (
          <VideoCard onDownload={onDownload} information={videoInfo} />
        )}
      </div>
    </MainView>
  );
};

export default MainPage;
