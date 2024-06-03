import React from "react";

export default function Header() {
  return (
    <div>
      <div className="w-2/4 mx-auto mt-10 mb-3">
        <h1 className="text-5x1 mb-3">Green Eastin</h1>
        <p className="text-2x1 text-cyan-900 ml-2">Cat Engineer</p>
      </div>

      <div className="flex space-between w-2/4 m-auto py-5 border rounded-sm px-3 shadow">
        <img
          alt="profile"
          className="rounded-full w-64 h-64 mx-8"
          src="./profile_picture.jpg"
        />
        <div>
          <h5 className="text-2x1 text-cyan-900 border-b-2 border-slate-300">
            Biography
          </h5>
          <p className="pt-3">
            Born on the side of the house, Green came from a loving mother and a
            litter of six. She was the mischevious escape artist that her
            siblings would all follow whenever the mood struck.
          </p>
        </div>
      </div>
    </div>
  );
}
