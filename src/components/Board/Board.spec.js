/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import Board from "./Board";

const numCols = 3;
const numRows = 3;

describe("Testing Board Structure", () => {
  it("Should contain three rows & three columns", () => {
    const { getAllByTestId } = render(<Board />);
    const parentElements = getAllByTestId("board-row");
    const childElements = getAllByTestId("ticButton");

    expect(parentElements).toHaveLength(numRows);
    expect(childElements).toHaveLength(numCols * numRows);

    let childNumber = 0;
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        expect(parentElements[i]).toContainElement(childElements[childNumber]);
        childNumber += 1;
      }
    }
  });
});

describe("Testing Board Functionality", () => {
  it("All Sqaures should be empty initially", () => {
    const { getAllByTestId } = render(<Board />);
    const elements = getAllByTestId("ticButton");
    for (let i = 0; i < numCols * numRows; i++) {
      expect(elements[i]).toHaveTextContent("");
    }
  });

  it("All Squares should hold some text value on click", () => {
    const { getAllByTestId } = render(<Board />);
    const squareElements = getAllByTestId("ticButton");
    for (let i = 0; i < numCols * numRows; i++) {
      fireEvent.click(squareElements[i]);
      expect(squareElements[i]).not.toBe("");
    }
  });

  it("Should change Sqaure text to X and O alternatively on click", () => {
    let xIsNext = true;
    const { getAllByTestId } = render(<Board />);
    const squareElements = getAllByTestId("ticButton");
    for (let i = 0; i < numCols * numRows; i++) {
      fireEvent.click(squareElements[i]);
      const text = xIsNext ? "X" : "O";
      expect(squareElements[i]).toHaveTextContent(text);
      xIsNext = !xIsNext;
    }
  });

  it("Should declare winner on three consecutive equal values", () => {
    // const winSequence = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];

    const { getAllByTestId, getByTestId } = render(<Board />);
    const squareElements = getAllByTestId("ticButton");

    fireEvent.click(squareElements[0]);
    fireEvent.click(squareElements[4]);
    fireEvent.click(squareElements[1]);
    fireEvent.click(squareElements[0]);
    fireEvent.click(squareElements[2]);

    const statusElement = getByTestId("winnerStatus");
    expect(statusElement).toHaveTextContent("Winner: X");
  });
});
