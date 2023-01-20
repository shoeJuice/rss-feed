import "@testing-library/jest-dom";
import "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import Searchbar from '../Searchbar'

describe("Searchbar", () => {
  it("Properly loads onto the dom", () => {
    render(<Searchbar />)
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });
  it("Reacts to input value", () => {
    render(<Searchbar />)
    expect(screen.getByTestId("submit-btn")).toBeInTheDocument();
    expect(screen.getByTestId("submit-btn")).toBeDisabled();
    expect(screen.queryByTestId("clear-btn")).not.toBeInTheDocument();
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "foobar" },
    });
    expect(screen.getByTestId("submit-btn")).toBeEnabled();
    expect(screen.getByTestId("clear-btn")).toBeInTheDocument();
  });
  it("Passes input value to the submit handler method", () => {
    const mockHandler = jest.fn();
    render(<Searchbar submitHandler={mockHandler} />)
    expect(screen.getByTestId("search-bar")).toHaveValue("");
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "foobar" },
    });
    expect(screen.getByTestId("search-bar")).toHaveValue("foobar");
    fireEvent.click(screen.getByTestId("submit-btn"));
    expect(mockHandler).toHaveBeenCalledWith("foobar");
  });
  it("Clears input by clicking on the clear button", () => {
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "foobar" },
    });
    expect(screen.getByTestId("search-bar")).toHaveValue("foobar");
    fireEvent.click(screen.getByTestId("clr-btn"));
    expect(screen.getByTestId("search-bar")).toHaveValue("");
  });
  it("Disables search button for inputs consisting of only whitespace", () => {
    expect(screen.getByTestId("search-bar")).toHaveValue("");
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "        " },
    });
    expect(screen.getByTestId("search-bar")).toHaveValue("        ");
    expect(screen.getByTestId("submit-btn")).toBeDisabled();
  });
  it("Disables search for input values consisting of non-alphanumeric letters", () => {
    expect(screen.getByTestId("search-bar")).toHaveValue("");
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "🤪😁🥲" },
    });
    expect(screen.getByTestId("search-bar")).toHaveValue("🤪😁🥲");
    expect(screen.getByTestId("submit-btn")).toBeDisabled();
  });
});
