import React from "react";

export default function StructurePointers() {
  return (
    <div
      className="shadow-[0_-4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)]
                 rounded-[15px] bg-[#FDFDFD]"
      style={{ width: "480px", height: "580px" }}
    >
      {/* Top header */}
      <div className="bg-black text-white rounded-t-[15px] h-[50px] flex items-center px-5 justify-between">
        <h2 className="text-[16px] font-semibold">Structure your Pointers</h2>
        <span className="text-white text-[18px] font-bold">i</span>
      </div>

      {/* Body */}
      <div className="p-5 text-[14px] leading-[1.6]">
        <p className="mb-4">
          <span className="font-semibold">Description :</span> Write a 300-400 word
          article from your thread. Publish your understanding and showcase it
          to the entire world.
        </p>

        {/* Title input */}
        <div className="mb-4">
          <label className="text-[15px] font-semibold">Title</label>
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-[8px] mt-2 px-3"
            placeholder=""
          />
        </div>

        {/* Content input */}
        <div className="mb-4">
          <label className="text-[15px] font-semibold">Content</label>
          <textarea
            className="w-full h-[200px] border border-gray-300 rounded-[8px] mt-2 p-3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
