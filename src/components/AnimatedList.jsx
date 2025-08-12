import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";

export default function AnimatedList({activePanel, setActivePanel}) {
    const [done, setDone] = useState(false);

    const [listOne] = useTypewriter({
    words: ['[1.] Projects'],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 40,    
  })
  const [listTwo] = useTypewriter({
    words: ['[2.] Skills'],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 40,    
  })
  const [listThree] = useTypewriter({
    words: ['[3.] About'],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 40,   
    onLoopDone: () => setDone(true) 
  })
    return (
        <>
        <div className="pt-5 flex flex-col gap-2">
            <div className="flex flex-row"><Typewriter 
            words={['>>SELECT FROM THE OPTIONS:']}
            loop={1}
            typeSpeed={30} /> {!done ? (<Cursor cursorStyle="_"/>): ""}</div>
            <div className="p-2 flex flex-col gap-2">
            <a className={`cursor-pointer  hover:scale-102 ${activePanel === "projects" ? "underline" : ""} ${activePanel === "projects" ? "scale-102" : ""}`} 
            onClick={() => setActivePanel("projects")}>{listOne}{!done ? (<Cursor cursorStyle="_"/>): ""}</a>
            <a className={`cursor-pointer  hover:scale-102 ${activePanel === "skills" ? "underline" : ""} ${activePanel === "skills" ? "scale-102" : ""}`} onClick={() => setActivePanel("skills")}>{listTwo}{!done ? (<Cursor cursorStyle="_"/>): ""}</a>
            <a className={`cursor-pointer  hover:scale-102 ${activePanel === "about" ? "underline" : ""} ${activePanel === "about" ? "scale-102" : ""} `} onClick={() => setActivePanel("about")}>{listThree}{!done ? (<Cursor cursorStyle="_"/>): ""}</a>
            <a className={`cursor-pointer  hover:scale-102 ${activePanel === "" ? "underline" : ""} ${activePanel === "" ? "scale-102" : ""} `} onClick={() => setActivePanel("")}>[4] root{!done ? (<Cursor cursorStyle="_"/>): ""}</a>
            </div>
        </div>
        </>
    )
}