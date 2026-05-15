"use client";

import { useState } from "react";

export default function NumberLine() {
  const [position, setPosition] = useState(0);

  const numbers = Array.from({ length: 21 }, (_, i) => i - 10);

  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => setPosition(position - 1)}
          className="px-4 py-2 bg-black text-white rounded"
        >
          -
        </button>

        <div className="text-xl font-bold">Poziție: {position}</div>

        <button
          onClick={() => setPosition(position + 1)}
          className="px-4 py-2 bg-black text-white rounded"
        >
          +
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 overflow-x-auto">
        {numbers.map((n) => (
          <div
            key={n}
            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
              n === position
                ? "bg-blue-500 text-white border-blue-700"
                : "bg-white text-black border-gray-400"
            }`}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
