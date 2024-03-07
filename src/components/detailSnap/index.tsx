import { FC } from "react";
import { Link } from "react-router-dom";
import { DetailSnapComponentProps } from "./types";

export const DetailSnapComponent: FC<DetailSnapComponentProps> = ({
  record,
}) => {
  return (
    <>
      <div
        className="card w-full bg-base-100 shadow-xl"
        data-testid="details_snap_component"
      >
        <div className="card-body">
          <h2 className="card-title">{record?.school_name}</h2>
          <div className="grid grid-cols-4">
            {record && (
              <>
                {Object.entries(record).map(([key, value], index) => {
                  return (
                    <div
                      className="border-2 border-red-100 m-4 p-4"
                      key={`rec_details_${index}`}
                    >
                      <div>{key}</div>
                      <div className="border-b-2 mb-4" />
                      <div>{value}</div>
                    </div>
                  );
                })}
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
