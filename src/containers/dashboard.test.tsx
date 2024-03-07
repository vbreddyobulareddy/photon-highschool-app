import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import DashboardContainer from "./dashbaord";
import { appStore } from "../store";

describe("TableViewComponent UnitTest", () => {
  test("Render TableViewComponent", () => {
    render(
      <>
        <Provider store={appStore}>
          <DashboardContainer />
        </Provider>
      </>
    );
    const linkElement = screen.getByTestId("table_view_component");
    expect(linkElement).toBeInTheDocument();
  });
});
