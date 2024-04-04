"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

const HERO = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="absolute bottom-0 right-0 z-10 m-5 pointer-events-none flex items-center  gap-3">
        <div className="h-[0.5px] w-[40px] rounded-full bg-white" />
        <div className="leading-none">
          <span className="text-[11px] text-white">
            Beyond Infinity
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-10 m-5 pointer-events-none flex items-center  gap-3">
        <div className="h-[0.5px] w-[150px] rounded-full bg-white" />
        <div className="leading-none">
          <span className="text-[11px] text-white">
            COMING SOON
          </span>
        </div>
      </div>
      {loading && (
        <div className="absolute w-full min-h-screen flex justify-center items-center">
           <span className="text-[11px] text-white">
            Loading...
          </span>
        </div>
      )}
      <div className="flex w-full h-screen justify-center items-center absolute top-0">
        <div>
          <Spline
            onLoad={() => setLoading(false)}
            scene="https://prod.spline.design/fiBySrGBg09ynWyA/scene.splinecode"
            className={`${loading?"scale-0":"scale-100"} duration-500 `}
          />
        </div>
      </div>
    </>
  );
};

export default HERO;
