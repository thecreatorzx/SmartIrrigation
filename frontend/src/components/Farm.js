import React, { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GiGroupedDrops } from "react-icons/gi";

const Farm = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="farm-control-component">
      <h2>Farm Control</h2>
      <div className="dropdown" onClick={() => setShowControls(!showControls)}>
        {showControls ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </div>

      {showControls && (
        <div className="control-boxes">
          <div className="control-row">
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 1
              </button>
            </div>
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 2
              </button>
            </div>
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 3
              </button>
            </div>
          </div>
          <div className="control-row">
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 4
              </button>
            </div>
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 5
              </button>
            </div>
            <div className="control-box">
              <div className="img"></div>
              <button className="pump-button">
                <div className="pump-button-icon">
                  <GiGroupedDrops />
                </div>
                Use Pump 6
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Farm;
