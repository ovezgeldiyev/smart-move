import React, { useState } from "react";

export default function Stake() {
  const [copy, setCopy] = useState(false);
  const [copy2, setCopy2] = useState(false);
  return (
    <section className="stake">
      <div className="auto__container">
        <div className="stake__inner">
          <div className="stake__inner-title">
            <h2>STAKE WITH US</h2>
          </div>
          <div className="stake__inner-info">
            <div className="stakeItem">
              <h4>solana</h4>
              <div className="stakeItem__row">
                <a href="#" target="_blank" className="button primary">
                  {" "}
                  marinade.finance{" "}
                </a>
                <a href="#" target="_blank" className="button primary">
                  {" "}
                  solblaze.org{" "}
                </a>
              </div>
            </div>
            <div className="stakeItem">
              <h4>near</h4>
              <div className="stakeItem__row">
                <button
                  type="button"
                  className="button big"
                  onClick={() => {
                    navigator.clipboard.writeText("some example value");
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 1000);
                  }}
                >
                  {copy && <div className="tooltip">Copied!</div>}
                  copy validator id
                </button>
              </div>
            </div>
            <div className="stakeItem">
              <h4>NYM</h4>
              <div className="stakeItem__row">
                <button
                  type="button"
                  className="button big"
                  onClick={() => {
                    navigator.clipboard.writeText("some example value");
                    setCopy2(true);
                    setTimeout(() => {
                      setCopy2(false);
                    }, 1000);
                  }}
                >
                  copy validator id
                  {copy2 && <div className="tooltip">Copied!</div>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
