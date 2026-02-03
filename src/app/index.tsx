import AdditionalExperience from "./AdditionalExperience";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <>
      <main
        className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 
                       space-y-8 pt-6
                       p-4 sm:p-6 md:p-8"
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
