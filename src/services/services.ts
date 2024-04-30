import axios from "../utils/Api";

export class Services {
  async getVideoData(link: string) {
    try {
      const result = await axios.get(`/information_video?link=${link}`);
      
      console.log('result',result)
      return result.data;
    } catch (error) {
      console.log('ERROR: ', error)
      return
    }
  }
}
