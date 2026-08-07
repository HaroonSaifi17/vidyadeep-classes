import { TopBar } from "../layout/TopBar";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { Hero } from "../sections/Hero";
import { TickerRow } from "../sections/TickerRow";
import { Method } from "../sections/Method";
import { AcademicPrograms } from "../sections/AcademicPrograms";
import { ExamPrep } from "../sections/ExamPrep";
import { TrackRecord } from "../sections/TrackRecord";
import { SkillLab } from "../sections/SkillLab";
import { Campus } from "../sections/Campus";
import { PromiseBanner } from "../sections/PromiseBanner";
import { FaqSection } from "../sections/FaqSection";
import { VisitSection } from "../sections/VisitSection";

export default function HomePage() {
  return (
    <div className="overflow-x-clip bg-paper text-ink selection:bg-saffron-soft">
      <div className="grain" aria-hidden="true" />
      <TopBar />
      <Navbar />
      <main id="top">
        <Hero />
        <TickerRow />
        <Method />
        <AcademicPrograms />
        <ExamPrep />
        <TrackRecord />
        <SkillLab />
        <Campus />
        <PromiseBanner />
        <FaqSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}