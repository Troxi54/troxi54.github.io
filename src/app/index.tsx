import cn from "@/utils/tailwind";
import AdditionalExperience from "./AdditionalExperience";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <>
      <main
        className={cn(
          "flex flex-col justify-start items-center grow text-center",
          "w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 space-y-8 pt-6 p-4 sm:p-6 md:p-8",
          "bg-[#ffffff08] border border-[#ffffff0d] shadow-[0_4px_20px_#00000066] backdrop-blur-[10px] rounded-2xl",
        )}
      >
        <Portfolio />
        <Skills />
        <AdditionalExperience />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
