import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/hero";

test("renders the app correctly", () => {
  render(<Hero />);

  // Check if the text "Simplicity Redefined" is in the document
  const linkElement = screen.getByText(/Simplicity Redefined/i);
  expect(linkElement).toBeInTheDocument();
});
