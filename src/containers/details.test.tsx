import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../store";
import DetailsContainer from "./details";
import { MemoryRouter } from "react-router-dom";

describe("TableViewComponent UnitTest", () => {
  test("Render TableViewComponent", () => {
    render(
      <>
        <Provider store={appStore}>
          <MemoryRouter initialEntries={["/02M260"]}>
              <DetailsContainer />
          </MemoryRouter>
        </Provider>
      </>
    );
    const linkElement = screen.getByTestId("details_snap_component");
    expect(linkElement).toBeInTheDocument();
  });
});
