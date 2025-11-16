import React from 'react'

export default function VideoCard() {
  return (
    <div
      className="shadow-[0_-4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)]
                 rounded-[15px] bg-[#FDFDFD] mt-6"
      style={{ width: "480px", height: "580px" }}
    >
      {/* Header */}
      <div className="bg-black text-white rounded-t-[15px] h-[50px] flex items-center justify-between px-4">
        <p className="text-[16px] font-semibold tracking-wide">
          Technical Project Management
        </p>

        {/* Info Circle */}
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-[14px]">
          i
        </div>
      </div>

      {/* Description */}
      <div className="px-5 py-4 text-[14px] leading-[20px] text-black">
        <span className="font-semibold">Description:</span>
        <span className="ml-1 font-normal">
          Story of Alignment Scope of Agility Specific Approach
        </span>
      </div>

      {/* Video */}
      <div className="px-4">
        <iframe
          width="100%"
          height="340"
          className="rounded-lg"
          src="https://www.youtube.com/embed/jI1MWrli3X8"
          title="Technical Project Management Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
