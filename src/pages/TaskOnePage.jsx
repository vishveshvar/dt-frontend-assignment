import React, { useState } from "react";

import JourneySidebar from "../components/JourneySidebar";
import RightNotice from "../components/RightNotice";
import FloatingButtons from "../components/FloatingButtons";

import VideoCard from "../components/VideoCard";
import ThreadBuildCard from "../components/ThreadBuildCard";
import StructurePointers from "../components/StructurePointers";
import FourSAMethod from "../components/FourSAMethod";

export default function TaskOnePage() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] relative overflow-x-hidden">

      {/* ---------------------- TOP HEADER ---------------------- */}
      <header className="w-full bg-white px-10 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0029FF] text-white font-bold text-xl rounded-full flex items-center justify-center">
            DT
          </div>

          <div>
            <h1 className="text-lg font-bold">
              DEEP <span className="text-[#0029FF]">THOUGHT</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Web Development Assignment</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">?</div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">★</div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">👤</div>
        </div>
      </header>

      {/* ---------------------- LEFT SIDEBAR ---------------------- */}
      <JourneySidebar open={openSidebar} setOpen={setOpenSidebar} />

      {!openSidebar && (
        <button
          onClick={() => setOpenSidebar(true)}
          className="fixed left-0 top-[200px] bg-black text-white px-4 py-2 rounded-r-xl z-40 text-sm"
        >
          Journey <br /> Board
        </button>
      )}

      {/* ---------------------- RIGHT NOTICE ---------------------- */}
      <RightNotice />

      {/* ---------------------- PAGE TITLE + SUBMIT ---------------------- */}
      <div className="flex justify-between items-center px-16 mt-12">
        <h1 className="text-[32px] font-bold text-[#0029FF]">
          Technical Project Management
        </h1>

        {/* Submit button – positioned EXACTLY like Figma */}
        <button className="px-6 py-2 bg-[#0029FF] text-white rounded-lg shadow hover:scale-105 transition mt-2">
          Submit task
        </button>
      </div>

      {/* ---------------------- EXPLORE BOX ---------------------- */}
      <div className="px-16 mt-6">
        <div className="bg-[#E9ECFF] p-6 rounded-[10px] max-w-[1066px] shadow">
          <h2 className="font-bold text-[18px] mb-2">
            Explore the world of management
          </h2>
          <p className="text-[14px] text-gray-700 leading-relaxed">
            As a project manager, you play an important role in leading a project
            through initiation, planning, execution, monitoring, controlling and
            completion. How? Do you want to manage each and every step of your life?
          </p>
        </div>
      </div>

      {/* ---------------------- CARD ROW 1 ---------------------- */}
      <div className="px-16 mt-12 flex gap-10">
        <VideoCard />
        <ThreadBuildCard />
      </div>

      {/* ---------------------- CARD ROW 2 ---------------------- */}
      <div className="px-16 mt-12 flex gap-10 pb-32">
        <StructurePointers />
        <FourSAMethod />
      </div>

      <FloatingButtons />
    </div>
  );
}
