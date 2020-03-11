import React from "react";
import { render } from "@testing-library/react";
import { ErrorMessage } from "../../components/view/errorMessage";

test("errorMessage component renders correctly", () => {
  render(<ErrorMessage />);
  const errorMessageElement = document.querySelector(
    ".error__message-container"
  );

  expect(errorMessageElement).toBeInTheDocument();
  expect(errorMessageElement).toContainHTML(
    "<p>Unable to load teaser data</p>"
  );
});
