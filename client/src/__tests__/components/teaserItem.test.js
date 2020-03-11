import React from "react";
import { render } from "@testing-library/react";
import { TeaserItem } from "../../components/view/teaserItem";

test("teaserItem should render correctly", () => {
  const teasersData = require("../../../../server/data/data-feed.json");

  render(<TeaserItem teasers={teasersData[0]} />);
  const articleElementList = document.querySelectorAll("article");
  expect(articleElementList).toBeInTheDocument();
});
