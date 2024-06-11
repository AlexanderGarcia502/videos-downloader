import { useEffect, useState } from "react";
import { Services } from "../services/services";
import axios, { CancelTokenSource } from "axios";

interface IOnDownload {
  link: string;
  resolution?: string;
}

const useDownload = () => {
  const services = new Services();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null);

  const download = async ({ link, resolution }: IOnDownload) => {
    try {
      setLoading(true);
      setError(null);
      const source = axios.CancelToken.source();
      setCancelTokenSource(source);
      await services.downloadVideo(
        { link, resolution: resolution || "" },
        { cancelToken: source.token }
      );
    } catch (error: any) {
      if (axios.isCancel(error)) {
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const downloadMp3 = async ({ link }: { link: string }) => {
    try {
      setLoading(true);
      setError(null);
      const source = axios.CancelToken.source();
      setCancelTokenSource(source);
      await services.downloadMP3({ link }, { cancelToken: source.token });
    } catch (error: any) {
      if (axios.isCancel(error)) {
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Se ha cancelado la descarga.");
      setCancelTokenSource(null);
    }
  };

  useEffect(() => {
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel(
          "Se ha cancelado la descarga debido a la unmount del componente."
        );
      }
    };
  }, [cancelTokenSource]);

  return { loading, error, download, downloadMp3, cancelRequest };
};

export default useDownload;
