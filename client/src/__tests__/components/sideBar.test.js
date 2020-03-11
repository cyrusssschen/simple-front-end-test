import React from "react";
import { render } from "@testing-library/react";
import { SideBar } from "../../components/view/sideBar";
import { SIDEBAR_IMAGE_URL } from "../../utils/constants";

test("sideBar component renders correctly", () => {
  render(<SideBar imageUrl={SIDEBAR_IMAGE_URL} />);
  const sideBarElement = document.querySelector(".sidebar");
  const pictureElement = document.querySelector("picture");
  const imageElement = document.querySelector(".sidebar__image");

  expect(sideBarElement).toBeInTheDocument();
  expect(sideBarElement).toContainElement(pictureElement);
  expect(pictureElement).toContainElement(imageElement);
});
