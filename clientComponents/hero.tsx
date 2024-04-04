"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

const HERO = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="absolute bottom-0 right-0 z-10 m-5 pointer-events-none flex items-center  gap-3">
        <div className="h-[0.5px] w-[40px] rounded-full bg-white" />
        <div>
          <span className="text-[11px] text-white">
            Explore beyond Infinity
          </span>
        </div>
      </div>
      <div>
        <div>
          <Spline
            onLoad={() => setLoading(false)}
            scene="https://prod.spline.design/fiBySrGBg09ynWyA/scene.splinecode"
            className={`${loading?"scale-0":"scale-100"} duration-500`}
          />
        </div>
      </div>
    </>
  );
};

export default HERO;
