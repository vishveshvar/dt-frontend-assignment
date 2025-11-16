import React, { useState } from "react";

export default function JourneyBoard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 top-40 z-50">
      {/* Toggle Button (the black bar on the side) */}
      <button
        onClick={() => setOpen(true)}
        className={`bg-black text-white font-semibold px-3 py-2 rounded-r-xl shadow transition-all 
                    ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
        }}
      >
        Journey Board
      </button>

      {/* JOURNEY PANEL */}
      <div
        className={`bg-[#FDFDFD] shadow-[0_1px_1px_rgba(0,0,0,0.25)] 
                    rounded-bl-[20px] rounded-br-[20px] 
                    transition-transform duration-500 ease-out 
                    fixed top-32 
                    ${open ? "translate-x-0" : "-translate-x-[100%]"} `}
        style={{
          width: "392px",
          height: "692px",
          borderTopLeftRadius: "0px",
        }}
      >
        {/* HEADER */}
        <div className="bg-black text-white h-[50px] rounded-t-none rounded-bl-[20px] rounded-br-[20px] px-5 flex justify-between items-center">
          <h2 className="text-[16px] font-semibold">Journey Board</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-[20px] font-bold"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 text-[15px] leading-[1.8]">
          <ul className="list-disc ml-4 space-y-3">
            <li className="font-semibold">Explore the world of management</li>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
