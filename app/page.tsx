"use client"

import SPLINE_HERO from "@/clientComponents/hero";
import React, { useEffect } from "react";

const HOME = () => {
  useEffect(() => {
    (async () => {
      //@ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen bg-black ">
        <SPLINE_HERO />
      </div>
      <div className="w-full h-52 bg-gray-200 my-1" />
      <div className="w-full h-52 bg-gray-200 my-1" />
      <div className="w-full h-52 bg-gray-200 my-1" />
      <div className="w-full h-52 bg-gray-200 my-1" />
    </>
  );
};

export default HOME;
