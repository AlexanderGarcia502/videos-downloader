import axios from "../utils/Api";
import { CancelToken } from "axios";

interface IDownloadVideo {
  link: string;
  resolution: string;
}
interface ICancelToken {
  cancelToken?: CancelToken;
}
export class Services {
  async getVideoInformation(network: string, link: string) {
    try {
      const result: any = await axios.get(
        `/information_video?network=${network}&link=${link}`
      );

      return result.data.data;
    } catch (error: any) {
      console.log("ERROR:: ", error);
      const responseMessage = error.response?.data.message;
      if (!responseMessage) {
        throw new Error(error.message);
      } else {
        throw new Error(responseMessage);
      }
    }
  }
  downloadVideo = async (
    { link, resolution }: IDownloadVideo,
    { cancelToken }: ICancelToken
  ) => {
    try {
      const response = await axios.post(
        "https://videos-downloader-backend.vercel.app/api/youtube/download_video",
        {
          link,
          resolution,
        },
        {
          cancelToken,
        }
      );

      const data = response.data;
      if (data.ok) {
        const a = document.createElement("a");
        a.href = `https://videos-downloader-backend.vercel.app${data.downloadUrl}`;
        a.download = "video.mp4";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("**Error:", data.message);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  downloadMP3 = async (
    { link }: { link: string },
    { cancelToken }: ICancelToken
  ) => {
    try {
      const response = await axios.post(
        "https://videos-downloader-backend.vercel.app/api/youtube/download_mp3",
        {
          link,
        },
        {
          cancelToken,
        }
      );

      const data = response.data;
      if (data.ok) {
        const a = document.createElement("a");
        a.href = `https://videos-downloader-backend.vercel.app${data.downloadUrl}`;
        a.download = "archivo.mp3";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("**Error:", data.message);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
