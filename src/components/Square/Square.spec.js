/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Square from "./Square";

describe("Testing square button", () => {
  it("Square button text should be empty", () => {
    const { getByTestId } = render(<Square />);
    expect(getByTestId("ticButton")).toHaveTextContent("");
  });

  it("Square button text should be X", () => {
    const { getByTestId } = render(<Square value={"X"} />);
    expect(getByTestId("ticButton")).toHaveTextContent("X");
  });

  it("Square button text should be O", () => {
    const { getByTestId } = render(<Square value={"O"} />);
    expect(getByTestId("ticButton")).toHaveTextContent("O");
  });
});
