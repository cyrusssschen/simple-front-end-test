import React from "react";
import { render } from "@testing-library/react";
import { LoadingSpinner } from "../../components/view/loadingSpinner";

test("loadingSpinner component renders correctly", () => {
  render(<LoadingSpinner  />);

  const loadingSpinnerElement = document.querySelector(".loading-spinner");
  expect(loadingSpinnerElement).toBeInTheDocument();
});
