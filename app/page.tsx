import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Ask from "@/components/Ask";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <StatusBar />
          <Hero />
          <Experience />
          <Ask />
          <Work />
          <Skills />
          <Research />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
