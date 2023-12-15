import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/home";

test("renders the app correctly", () => {
  render(<Home />);

  // Check if the text "Simplicity Redefined" is in the document
  const linkElement = screen.getByText(/Simplicity Redefined/i);
  expect(linkElement).toBeInTheDocument();
});
