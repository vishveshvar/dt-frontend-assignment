import React from "react";

export default function ThreadBuildCard() {
  return (
    <div
      className="shadow-[0_-4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)]
                 rounded-[15px] bg-[#FDFDFD] mt-6"
      style={{ width: "480px", height: "580px" }}
    >
      {/* Header */}
      <div className="bg-black text-white rounded-t-[15px] h-[50px] flex items-center justify-between px-4">
        <p className="text-[16px] font-semibold tracking-wide">Threadbuild</p>

        {/* Info Icon */}
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-[14px]">
          i
        </div>
      </div>

      {/* Description */}
      <div className="px-5 py-4 text-[14px] leading-[20px] text-black">
        <span className="font-semibold">Description:</span>
        <span className="ml-1 font-normal">
          Watch the video and threadbuild, and jot out key threads while watching the
          video
        </span>
      </div>

      {/* Main Thread */}
      <div className="mx-5 bg-[#FFFDF1] rounded-[5px] border border-[#E5E5E5] p-4">
        {/* Thread A Title */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[16px]">Thread A</div>

          {/* Up Arrow Icon */}
          <div className="text-[18px] font-bold text-gray-700 -mt-1">⌃</div>
        </div>

        {/* Two Input Boxes */}
        <div className="mt-4 flex gap-4">
          {/* Left Box */}
          <div className="flex-1">
            <p className="text-[12px] font-semibold mb-1">Sub thread 1</p>
            <textarea
              placeholder="Enter Text here"
              className="w-full h-[70px] border rounded-[10px] p-3 text-[13px]"
            />
          </div>

          {/* Right Box */}
          <div className="flex-1">
            <p className="text-[12px] font-semibold mb-1">Sub Interpretation 1</p>
            <textarea
              placeholder="Enter Text here"
              className="w-full h-[70px] border rounded-[10px] p-3 text-[13px]"
            />
          </div>
        </div>

        {/* Icon Row + Dropdowns */}
        <div className="mt-4 flex items-center gap-3">
          {/* Icons */}
          <div className="flex items-center gap-3 text-[18px]">
            <span>💡</span>
            <span>📝</span>
            <span>📄</span>
            <span>💬</span>
          </div>

          {/* Dropdowns */}
          <select className="ml-auto border rounded px-2 py-1 text-[12px]">
            <option>Select Category</option>
          </select>

          <select className="border rounded px-2 py-1 text-[12px]">
            <option>Select Process</option>
          </select>
        </div>

        {/* Sub Thread Button */}
        <button className="mt-4 bg-[#0048FF] text-white px-4 py-2 rounded text-[13px] font-medium">
          + Sub-thread
        </button>

        {/* Summary Box */}
        <div className="mt-4">
          <p className="text-[13px] font-medium mb-1">Summary for Thread A</p>
          <textarea
            className="w-full h-[80px] border rounded-[10px] p-3 text-[13px]"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
