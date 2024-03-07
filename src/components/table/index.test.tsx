import { render, screen } from "@testing-library/react";
import { TableViewComponent } from ".";
import { TableViewColumn } from "./types";
import { HSRecord } from "../../store/hsCounter/types";
import { Link } from "react-router-dom";

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

describe("TableViewComponent UnitTest", () => {
  test("Render TableViewComponent", () => {
    render(<TableViewComponent columns={hsTableColumns} data={[]} />);
    const linkElement = screen.getByTestId("table_view_component");
    expect(linkElement).toBeInTheDocument();
  });
});
