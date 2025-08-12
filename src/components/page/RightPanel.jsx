import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import { Typewriter, Cursor } from "react-simple-typewriter";
import gif from "../../assets/fallout.gif";
export default function RightPanel({activePanel, done}) {
    return(
        <>
        <div className="col-span-2 sm:col-span-1 sm:h-screen p-5 ">
            {activePanel == "" && (done && <div className="pt-20 flex flex-col justify-center items-center gap-2">
                <img src={gif} className="h-[300px] w-[150px]"/>
                <span><Typewriter words={['>System Boot Complete']} typeSpeed={15} loop={1}/>{!done ? (<Cursor cursorStyle="_"/>): ""}</span>
               <div className="flex flex-row"><span><Typewriter words={['>Mascot Animation: ']} typeSpeed={15} loop={1}/></span>
               <span className="pl-1 animate-pulse"><Typewriter  words={[' ONLINE']} typeSpeed={15} loop={1} />{!done ? (<Cursor cursorStyle="_"/>): ""}</span></div>
                <span><Typewriter words={['>Awaiting user input...']} typeSpeed={15} loop={0}/><Cursor cursorStyle="_"/></span>
            </div>)}
            {activePanel == "projects" && <Projects />}
            {activePanel == "skills" && <Skills />}
            {activePanel == "about" && <About />}
        </div>
        </>
    )
}