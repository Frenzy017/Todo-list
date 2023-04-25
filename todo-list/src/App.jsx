import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="grid h-screen">
      <Navbar />
      <Sidebar />
      <Container />
    </div>
  );
};