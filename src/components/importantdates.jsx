// src/pages/ImportantDates.jsx
import { useRef } from "react";
import Navbar from "../components/Navbar/index";
import TopNavbar from "../components/Navbar/TopNavInfo";
import Timeline from "../components/Timeline";

export default function ImportantDates() {
  const timelineRef = useRef(null);

  return (
    <>
      {/* Top info bar (desktop only) */}
      <div className="hidden xl:block">
        <TopNavbar />
      </div>

      {/* Main Navbar */}
      <Navbar />

      {/* Page wrapper */}
      <main className="min-h-screen bg-[#f8faf9]">
        {/* Optional page intro / spacing */}
        <section className="pt-6">
          <Timeline ref={timelineRef} confid="68e9f184413c437a3acccc05" />
        </section>
      </main>
    </>
  );
}
