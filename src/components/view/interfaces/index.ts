import { IInfoVideo } from "../../../interfaces/dataInterface";

export interface IVideoCard {
  information: IInfoVideo | null;
  onDownload: (resolution: string) => void;
}
export interface IChildren {
  videoCard: React.FC<IVideoCard>;
}
export interface IMainViewProps {
  onDownload: (resolution: string) => void;
  onSearch: (url: string) => void;
  loading: boolean | undefined;
  information: IInfoVideo | null;
  error: string | null;
}
