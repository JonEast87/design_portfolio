import React from "react";

export default function Education() {
  return (
    <div>
      <div className="mb-5 mx-5">
        <h1 className="text-5x1 mb-3">Work Experience</h1>
        <p className="text-lg text-cyan-900">
          Here is my most relevant work experience.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-5">
        <div className="border rounded-sm p-3 shadow">
          <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
            At Home Poet
          </h3>
          <h5 className="py-2">2020 - Present</h5>
          <p>
            During the many hours of the day I spend singing meows to anyone
            willing to listen. My serande is so perfected that they have even
            paid me for my works in the form of food, water and pets.
          </p>
        </div>
      </div>
    </div>
  );
}
