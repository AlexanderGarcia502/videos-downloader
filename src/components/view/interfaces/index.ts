import { ReactNode } from "react";
import { IInfoVideo } from "../../../interfaces/dataInterface";

export interface IVideoCard {
  information: IInfoVideo | null;
  onDownload: ({
    resolution,
    format,
  }: {
    resolution?: string;
    format: string;
  }) => void;
}
export interface IChildren {
  videoCard: React.FC<IVideoCard>;
}
export interface IMainViewProps {
  onSearch: (url: string) => void;
  children: ReactNode;
}
