import { IInfoVideo } from "../../../interfaces/dataInterface";

export interface IVideoCard {
  data: IInfoVideo | null;
}
export interface IChildren {
  videoCard: React.FC<IVideoCard>;
}
export interface IMainViewProps {
  onDownload: () => void;
  onSearch: (url: string) => void;
  loading: boolean | undefined;
  information: IInfoVideo | null
}
