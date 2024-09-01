import React from "react";

export default function Support() {
  return (
    <section className="support">
      <div className="auto__container">
        <div className="support__inner">
          <div className="support__inner-title">
            <h2>SUPPORTED BY LEADING PROTOCOLS</h2>
          </div>
          <div className="support__inner-row">
            <a href="#" target="_blank">
              <img src="./images/support/solana-foundation.svg" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="./images/support/near-foundation.svg" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="./images/support/nym.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
