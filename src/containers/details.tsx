import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { HSRecord } from "../store/hsCounter/types";
import { DetailSnapComponent } from "../components/detailSnap";

const DetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const hsCounterStoreData: HSRecord[] = useSelector(
    (state: RootState) => state.hsCounter.data
  );
  const selectedHSRecord: HSRecord | undefined = hsCounterStoreData.find(
    (item) => item.dbn === id
  );
  console.log("====selectedHSRecord ", selectedHSRecord);
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="container">
          <DetailSnapComponent record={selectedHSRecord} />
        </div>
      </div>
    </>
  );
};

export default DetailsContainer;
