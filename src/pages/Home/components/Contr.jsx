import React from "react";
import { contrList } from "../../../Base/modul";

export default function Contr() {
  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("contrItem")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section className="contr">
      <div className="auto__container">
        <div className="contr__inner">
          <div className="contr__inner-title">
            <h2>contributionss</h2>
          </div>
          <div className="contr__inner-row" onPointerMove={handleMouseMove}>
            {contrList.map((item, index) => {
              return <ContrItem index={index} {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const ContrItem = (props) => {
  return (
    <div className="contrItem">
      <img src={props.image} alt="" />
    </div>
  );
};
