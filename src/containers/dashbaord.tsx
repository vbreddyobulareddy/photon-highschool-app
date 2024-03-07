import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getHSCounterData } from "../store/hsCounter/action";
import { TableViewComponent } from "../components/table";
import { TableViewColumn } from "../components/table/types";
import { HSRecord } from "../store/hsCounter/types";
import { Link } from "react-router-dom";

const DashboardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hsCounterStoreData = useSelector(
    (state: RootState) => state.hsCounter.data
  );

  useEffect(() => {
    dispatch(getHSCounterData());
  }, [dispatch]);

  console.log("--==hsCounterStoreData ", hsCounterStoreData);
  const hsTableColumns: TableViewColumn[] = [
    {
      field: "School Name",
      renderer: (row: HSRecord) => {
        return (
          <>
            <Link to={`/${row.dbn}`}>{row.school_name}</Link>
          </>
        );
      },
    },
    {
      field: "School 10th Seats",
      renderer: (row: HSRecord) => <>{row.school_10th_seats}</>,
    },
    {
      field: "ELL Programs",
      renderer: (row: HSRecord) => <>{row.ell_programs}</>,
    },
    {
      field: "Language Classes",
      renderer: (row: HSRecord) => <>{row.language_classes}</>,
    },
  ];

  return (
    <>
      <div className="flex justify-center m-4">
        <div className="container">
          <TableViewComponent
            columns={hsTableColumns}
            data={hsCounterStoreData}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
