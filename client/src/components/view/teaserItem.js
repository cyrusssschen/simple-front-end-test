import React from "react";
import ImageWorker from "react-worker-image";
import { TeaserImageLoader } from "./teaserImageLoader";

export const TeaserItem = props => {
  const { teaser } = props;
  return (
    <article className="teaserlist__col-article">
      <figure>
        <a href={teaser.url}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={teaser.contentImageUrl}
            />
            <source
              media="(max-width: 9999px)"
              srcSet={teaser.contentImageUrl}
            />
            <ImageWorker
              alt={teaser.contentTitle}
              src={teaser.contentImageUrl}
              placeholder={TeaserImageLoader}
            />
          </picture>
        </a>
      </figure>
      <div className="article__teaser-content">
        <a className="teaser__content-title" href={teaser.url}>
          <h2>{teaser.contentTitle}</h2>
        </a>
        <p className="teaser__content-summary">{teaser.contentSummary}</p>
      </div>
    </article>
  );
};
