import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  const AddHandler = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    } else if (progress > 100) {
      setProgress(100);
    }
    return false;
  };
  const ReduceHandler = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    } else if (progress < 0) {
      setProgress(0);
    }
    return false;
  };
  return (
    <>
      <button type="button" onClick={ReduceHandler}>
        -10
      </button>
      <button type="button" onClick={AddHandler}>
        +10
      </button>
      <div className="wrapper">
        <div className="progress-bar">
          <div
            className={
              "bar " +
              (progress <= 33
                ? "red"
                : progress > 33 && progress <= 66
                ? "orange"
                : progress > 66
                ? "green"
                : "")
            }
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="value">
          {progress < 0 ? 0 : progress > 100 ? 100 : progress}%
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
