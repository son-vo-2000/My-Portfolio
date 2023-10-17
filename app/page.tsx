import Intro from "@/components/Intro";
import SectionDiv from "@/components/Section-Div";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4  pt-28 sm:pt-40">
      <Intro/>
      <SectionDiv/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}
