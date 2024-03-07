import { FC } from "react";
import { Link } from "react-router-dom";
import { DetailSnapComponentProps } from "./types";

export const DetailSnapComponent: FC<DetailSnapComponentProps> = ({
  record,
}) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl" data-testid="details_snap_component">
        <div className="card-body">
          <h2 className="card-title">{record?.school_name}</h2>
          <div className="grid">
            {record && (
              <>
                <div>{`${record.overview_paragraph}`}</div>
              </>
            )}
          </div>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
