import Projects from "./Projects";
import Skills from "./Skills";

export default function RightPanel({activePanel}) {
    return(
        <>
        <div className="w-1/2 border h-screen">
            {activePanel == "projects" && <Projects />}
            {activePanel == "skills" && <Skills />}
            {activePanel == "about" && <h1>about</h1>}
        </div>
        </>
    )
}