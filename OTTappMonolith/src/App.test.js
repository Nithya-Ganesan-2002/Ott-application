import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app brand in navbar", () => {
  render(<App />);
  const brand = screen.getByText(/OTT Monolith/i);
  expect(brand).toBeInTheDocument();
});
