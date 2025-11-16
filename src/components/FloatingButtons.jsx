import React from 'react'
export default function FloatingButtons(){
  return (
    <div className="fixed right-6 bottom-8 flex flex-col gap-4 z-50">
      <button className="w-12 h-12 rounded-full bg-blue-600 text-white shadow flex items-center justify-center">?</button>
      <button className="w-12 h-12 rounded-full bg-blue-600 text-white shadow flex items-center justify-center">👥</button>
      <button className="w-12 h-12 rounded-full bg-blue-600 text-white shadow flex items-center justify-center">📅</button>
    </div>
  )
}