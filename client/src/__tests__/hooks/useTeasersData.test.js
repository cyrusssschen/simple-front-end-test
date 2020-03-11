import { renderHook } from "@testing-library/react-hooks";
import useTeasersData from "../../hooks/useTeasersData";
import { DATA_FEED_URL } from "../../utils/api";

test("should fetch teaser data correctly", async () => {
  const teasersData = require("../../../../server/data/data-feed.json");
  const { result, waitForNextUpdate } = renderHook(() =>
    useTeasersData(DATA_FEED_URL)
  );

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  expect(result.current.hasError).not.toBe(true);
  expect(Array.isArray(result.current.teasersData)).toBe(true);
  expect(result.current.teasersData.length).toBe(teasersData.data.length);
  expect(JSON.stringify(result.current.teasersData)).toBe(
    JSON.stringify(teasersData.data)
  );
});
