import React from "react";

export default function Sidebar() {
  return (
    <div className="max-w-xs">
      <form
        className="
      flex
      justify-center
      border-r-2
      border-black
      pt-8
      text-3xl
      font-sidebar
      h-screen 
      max-w-xs
     bg-gray-400
     "
      >
        <div>
          <h1 className="border-b-2 ">Projects</h1>
          <label>My lists</label>
          <button>Add</button>
          <or>
            <li>Work</li>
            <li>Personal</li>
            <li>Grocery List</li>
          </or>
        </div>
      </form>
    </div>
  );
}
