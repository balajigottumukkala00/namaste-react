import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  test("should Contact us page is render on to the page or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should we have button in our contact page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should we have placeholder for input value", () => {
    render(<Contact />);

    const placeholderText = screen.getByPlaceholderText("name");
    expect(placeholderText).toBeInTheDocument();
  });

  test("Should have 2 input textbox in our contact page", () => {
    render(<Contact />);

    const inputTextbox = screen.getAllByRole("textbox"); // not input inside getAllByRole Function
    expect(inputTextbox.length).toBe(2);
  });
});
