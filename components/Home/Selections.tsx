import React from "react";
import DisplayItem from "@/components/DisplayItem/DisplayItem";

const Selections = ({ title, items }) => {
  return (
    <>
    <div>{title}</div>
    <div style={{ display: 'flex'}}>
      {items.map((item) => {
        return <DisplayItem key={`${item.image}-${item.title}`} {...item} />;
      })}
    </div>
    </>
  );
};

export default Selections;
