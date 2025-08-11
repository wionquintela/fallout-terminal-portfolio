import Projects from "./Projects";

export default function RightPanel({activePanel}) {
    return(
        <>
        <div className="w-1/2 border h-screen p-5">
            {activePanel == "projects" && <Projects />}
            {activePanel == "skills" && <h1>skills</h1>}
            {activePanel == "about" && <h1>about</h1>}
        </div>
        </>
    )
}