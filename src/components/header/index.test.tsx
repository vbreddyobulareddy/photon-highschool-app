import { render, screen } from "@testing-library/react";
import { HeaderComponent } from ".";

test("Render HeaderComponent", () => {
  render(<HeaderComponent title="SampleApp" />);
  const linkElement = screen.getByTestId("app_header")
  expect(linkElement).toBeInTheDocument();
});
