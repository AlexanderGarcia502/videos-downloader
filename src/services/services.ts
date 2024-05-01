import axios from "../utils/Api";
export class Services {
  async getVideoInformation(link: string) {
    try {
      const result: any = await axios.get(`/information_video?link=${link}`);

      return result.data.data;
    } catch (error: any) {
      console.log("ERROR:: ", error);
      const responseMessage = error.response?.data.message
      if(!responseMessage){
        throw new Error(error.message);
      } else {
        throw new Error(responseMessage)
      }
      
    }
  }
}
