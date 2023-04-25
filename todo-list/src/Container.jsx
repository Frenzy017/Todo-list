import React from "react";

export default function Container() {
  return (
    <div
      className="
    absolute left-96
    pt-36
    col-start-2 w-screen
    max-w-screen-sm
    max-h-fit"
    >
      <nav className="bg-slate-200">
        <div>
          <div className="flex justify-center text-3xl space-x-5">
            <button className="rounded-lg border-4 bg-slate-200">
              Add Tasks
            </button>
            <button className="rounded-lg border-2 border-black bg-slate-200">
              Edit / Remove
            </button>
          </div>
        </div>
        <table>
          <tr>hello</tr>
          <tr>hello</tr>
          <tr></tr>
          <tr></tr>
        </table>
      </nav>
    </div>
  );
}
