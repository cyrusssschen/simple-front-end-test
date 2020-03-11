import React from "react";
import ContentLoader from "react-content-loader";

export const TeaserImageLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={260}
      viewBox="0 0 320 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ccc"
    >
      <rect x="0" y="0" rx="0" ry="0" width="320" height="260" />
    </ContentLoader>
  );
};
