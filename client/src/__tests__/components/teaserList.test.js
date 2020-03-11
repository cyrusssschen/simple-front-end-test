import React from "react";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { TeaserList } from "../../components/view/teaserList";
import useTeasersData from "../../hooks/useTeasersData";
import { DATA_FEED_URL } from "../../utils/api";

test("teaserList should render correctly", async () => {
  const teasersData = require("../../../../server/data/data-feed.json");
  const { result, waitForNextUpdate } = renderHook(() =>
    useTeasersData(DATA_FEED_URL)
  );

  await waitForNextUpdate();

  render(<TeaserList teasersData={result.current.teasersData} />);

  const teaserListContainerElement = document.querySelector(
    ".teaserlist__container"
  );
  const articleElementList = document.querySelectorAll("article");

  expect(teaserListContainerElement).toBeInTheDocument();
  expect(articleElementList.length).toBe(teasersData.data.length);
  expect(JSON.stringify(result.current.teasersData)).toBe(
    JSON.stringify(teasersData.data)
  );
});
