import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      <div style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      <About />
      <Experience />
    </div>
  );
}
