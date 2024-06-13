import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div className="mb-5 mx-5">
        <h1 className="text-5x1 mb-3">My Portfolio</h1>
        <p className="text-lg text-cyan-900">Take a look at some of my work!</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-5">
        <div className="border rounded-sm p-3 shadow">
          <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
            Pet handiwork
          </h3>
          <h5 className="py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer">
            View Project
          </h5>
          <p>
            Here is my greatest and latest work showcasing my refined skills as
            a professional cat.
          </p>
        </div>
      </div>
    </div>
  );
}
