import React from "react";
import { render } from "@testing-library/react";
import BauerMediaFrontEndTestApp from "../../app/BauerMediaFrontEndTestApp";

test("app renders without crashing", () => {
  render(<BauerMediaFrontEndTestApp />);
  const appRootElement = document.querySelector(".app");
  expect(appRootElement).toBeInTheDocument();
});
