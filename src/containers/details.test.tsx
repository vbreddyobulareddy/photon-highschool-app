import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../store";
import DetailsContainer from "./details";
import { MemoryRouter, Route } from "react-router-dom";

describe("TableViewComponent UnitTest", () => {
  test("Render TableViewComponent", () => {
    render(
      <>
        <Provider store={appStore}>
          <MemoryRouter initialEntries={["/02M260"]}>
            <Route path="/:id">
              <DetailsContainer />
            </Route>
          </MemoryRouter>
        </Provider>
      </>
    );
    const linkElement = screen.getByTestId("table_view_component");
    expect(linkElement).toBeInTheDocument();
  });
});
