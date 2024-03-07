import { ReactElement } from "react";
import { HSRecord } from "../../store/hsCounter/types";

export type TableViewColumn = {
  field: string;
  renderer: (row: HSRecord) => ReactElement;
};
export type TableViewComponentProps = {
  columns: TableViewColumn[];
  data: HSRecord[];
};
