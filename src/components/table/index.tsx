import { FC } from "react";
import { TableViewComponentProps } from "./types";

export const TableViewComponent: FC<TableViewComponentProps> = ({
  columns,
  data,
}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra" data-testid="table_view_component">
          <thead>
            <tr>
              {columns.map((col) => (
                <td>{col.field}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr>
                  {columns.map((col) => {
                    return <td>{col.renderer(row)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
