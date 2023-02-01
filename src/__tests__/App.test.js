import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" ', () => {
  expect(screen.queryByText("Now"));
});

test("should include the <ExampleComponent />", () => {
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.queryByTitle("time video"));
});

  it('should include "Now" in the header instead of a time', () => {
  });

  it('should include the ExampleComponent', () => {
  });
  
  it('should include the TestComponent', () => {
   });
 
