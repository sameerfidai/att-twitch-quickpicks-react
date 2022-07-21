import React from "react";
import "./RightSideBar.css";

function RightSideBar() {
  return (
    <div className="right-sidebar-container">
      <div className="att-div">
        <div className="att-div-left">
          <img
            className="att-logo-white"
            src="https://img.redbull.com/images/w_2048,x_0,y_0,f_auto,q_auto/redbullcom/2020/6/10/g1juwo74v8qpuccz6asd/att-technical-partner-logo"
          />
        </div>
        <div className="att-div-right">
          <p className="quickpicks-text">QuickPicks</p>
        </div>
      </div>

      <div className="att-sidebar-div">
        <div className="bet">
          <div className="bet-streamer-img-div">
            <img
              className="bet-streamer-img"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-70x70.png"
            />
          </div>
          <div className="bet-streamer-info-div">
            <p className="bet-streamer-name">TFUE</p>
            <p className="bet-streamer-game">Fortnite</p>
            <p className="bet-info">
              Proj Kills: <span className="bet-number">7.5</span>
            </p>
          </div>

          <div className="over-under-div">
            <div
              className="over-div"
              id="over-top"
              onClick={() =>
                (document.getElementById("over-top").style.backgroundColor =
                  "gray")
              }
            >
              <p className="over-text">OVER</p>
            </div>
            <div
              className="under-div"
              id="under-top"
              onClick={() =>
                (document.getElementById("under-top").style.backgroundColor =
                  "gray")
              }
            >
              <p className="under-text">UNDER</p>
            </div>
          </div>
        </div>
        <div className="bet">
          <div className="bet-streamer-img-div">
            <img
              className="bet-streamer-img"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-70x70.png"
            />
          </div>
          <div className="bet-streamer-info-div">
            <p className="bet-streamer-name">TFUE</p>
            <p className="bet-streamer-game">Fortnite</p>
            <p className="bet-info">
              Top 10:&nbsp;&nbsp;&nbsp;
              <span className="bet-number">8.5</span>
            </p>
          </div>

          <div className="over-under-div">
            <div
              className="over-div"
              id="over-bottom"
              onClick={() =>
                (document.getElementById("over-bottom").style.backgroundColor =
                  "gray")
              }
            >
              <p className="over-text">OVER</p>
            </div>
            <div
              className="under-div"
              id="under-bottom"
              onClick={() =>
                (document.getElementById("under-bottom").style.backgroundColor =
                  "gray")
              }
            >
              <p className="under-text">UNDER</p>
            </div>
          </div>
        </div>

        <div className="payout-container">
          <div className="left-container">
            <div className="risk-win-btn-select-div">
              <div className="risk-div">
                <p className="risk-text">Risk</p>
                <div className="risk-field">
                  <p className="risk-amount">50T</p>
                </div>
              </div>

              <div className="win-div">
                <p className="risk-text">To Win</p>
                <div className="win-field">
                  <p className="win-amount">250T</p>
                </div>
              </div>
            </div>

            <div className="payouts-div">
              <div className="payout-1">
                <div className="green-dot-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                    className="green-dot"
                  />
                </div>
                <p className="payout-text">2 plays payout</p>
                <div className="payout-multiplier-div">
                  <p className="payout-multiplier-text">5x</p>
                </div>
              </div>

              <div className="payout-1">
                <div className="green-dot-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                    className="green-dot"
                  />
                </div>
                <p className="payout-text">2 plays payout</p>
                <div className="payout-multiplier-div">
                  <p className="payout-multiplier-text">10x</p>
                </div>
              </div>

              <div className="payout-1">
                <div className="green-dot-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                    className="green-dot"
                  />
                </div>
                <p className="payout-text">2 plays payout</p>
                <div className="payout-multiplier-div">
                  <p className="payout-multiplier-text">20x</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="balance-div">
              <p className="balance-text">Balance:</p>
              <p className="balance-amount">100000T</p>
            </div>
            <div className="moreplays-div">
              <p className="more-plays-text">Pick More Plays</p>
            </div>
          </div>
        </div>

        <div className="pick-plays-btn-div">
          <p className="pick-plays-text">PICK PLAYS</p>
        </div>
      </div>

      <div className="att-gaming-div">
        <div className="att-gaming-top">
          <p className="att-gaming-text">AT&T Gaming</p>
        </div>
        <div className="att-gaming-down">
          <p className="claim-rewards-text">CLAIM REWARDS</p>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
