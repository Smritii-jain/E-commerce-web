import React from "react";

export default function Badge({ text }) {
  return (
    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded self-start">
      {text}
    </span>
  );
}
