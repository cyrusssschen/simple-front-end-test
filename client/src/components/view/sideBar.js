import React from "react";

export const SideBar = props => {
  return (
    <aside className="sidebar">
      <picture>
        <source media="(max-width: 767px)" srcSet={props.imageUrl} />
        <source media="(max-width: 9999px)" srcSet={props.imageUrl} />
        <img src={props.imageUrl} alt="sidebar" className="sidebar__image" />
      </picture>
    </aside>
  );
};
