import React, { useState } from "react";

export default function FourSAMethod() {
  const [openIntro, setOpenIntro] = useState(true);
  const [openThread, setOpenThread] = useState(true);
  const [openExample, setOpenExample] = useState(true);

  return (
    <div
      className="shadow-[0_-4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)]
                 rounded-[15px] bg-[#FDFDFD]"
      style={{ width: "480px", height: "580px" }}
    >
      {/* HEADER */}
      <div className="bg-black text-white rounded-t-[15px] h-[50px] flex items-center px-5 justify-between">
        <h2 className="text-[16px] font-semibold">4SA Method</h2>
        <span className="text-white text-[18px] font-bold">i</span>
      </div>

      <div className="p-5 text-[14px]">
        <p className="mb-4">
          <span className="font-semibold">Description :</span> To Explore more read more
        </p>

        {/* INTRODUCTION */}
        <div className="border rounded-lg mb-4">
          <div
            onClick={() => setOpenIntro(!openIntro)}
            className="flex justify-between items-center px-4 py-2 bg-[#F5F5F5] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">{openIntro ? "⌃" : "⌄"}</span>
              <span className="font-semibold">Introduction</span>
            </div>
            <span className="text-gray-600 text-sm">See More</span>
          </div>

          {openIntro && (
            <div className="p-4">
              The 4SA Method , How to bring a idea into progress ?
            </div>
          )}
        </div>

        {/* THREAD A */}
        <div className="border rounded-lg mb-4">
          <div
            onClick={() => setOpenThread(!openThread)}
            className="flex justify-between items-center px-4 py-2 bg-[#F5F5F5] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">{openThread ? "⌃" : "⌄"}</span>
              <span className="font-semibold">Thread A</span>
            </div>
            <span className="text-gray-600 text-sm">See More</span>
          </div>

          {openThread && (
            <div className="p-4">
              How are you going to develop your strategy ? Which method are you
              going to use to develop a strategy ? What if the project is lengthy?
            </div>
          )}
        </div>

        {/* EXAMPLE 1 */}
        <div className="border rounded-lg">
          <div
            onClick={() => setOpenExample(!openExample)}
            className="flex justify-between items-center px-4 py-2 bg-[#F5F5F5] cursor-pointer"
          >
            <h3 className="font-semibold">Example 1</h3>
          </div>

          {openExample && (
            <div className="p-4">
              You have a concept , How will you put into progress?
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
