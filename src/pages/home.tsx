import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Project from "@/components/Project";
import React from "react";

export default function Home() {
  return (
    <div>
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
