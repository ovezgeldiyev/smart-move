import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footerItem">
              <h4>SMT</h4>
            </div>
            <div className="footerItem big">
              <h4>
                /// <a href="#" target="blank">linktree</a> 
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
