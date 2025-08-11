import Separator from "../Separator";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Skills() {
    const [done, setDone] = useState(false);

    const projects = [
        {
            words: "STEMTask",
            type: "To-do App",
            status: "active",
            link: "https://stemtaskmanagement-lake.vercel.app/"
        }, {
            words: "WizzySneakers",
            type: "ecommerce",
            status: "active",
            link: ""
        }, {
            words: "%sys%/Wion",
            type: "portfolio",
            status: "active",
            link: "https://wionquintela-portfolio.vercel.app/"
        }
    ]
    const [subtext] = useTypewriter({
        words: ['Displaying Project Folders...'],
        loop: 1,
        typeSpeed: 30,
        deleteSpeed: 40,
        onLoopDone: () => setDone(true)
    })
    return(
        <>
        <div className="p-5">
            <Separator count={10}/>
           <div className="flex flex-row"><Typewriter
            words={['portfolio/adminSkills']}
            loop={1}
            typeSpeed={30}
            /><Cursor cursorStyle="_"/></div>
            <Separator count={10}/>
            <div className="">
                <h1>&gt;&gt;
                   {subtext}{!done ? (<Cursor cursorStyle="_"/>): ""}

                    {done && <div className="pt-3">
                        <div className="flex flex-col gap-5">
                    {
                        projects.map((props, index) => (
                            <>
                                <h1 id={index} className="pl-[30px]"> <Typewriter 
                                words={[`==> Project no. [${index + 1}.]: ${props.words}`]}
                                loop={1}
                                typeSpeed={30}
                            />{!done ? (<Cursor cursorStyle="_"/>): ""}</h1>
                            <div className="pl-[150px] flex flex-col">
                                <span><Typewriter 
                                words={[`>type: ${props.type}`]}
                                loop={1}
                                typeSpeed={30}
                            /></span>
                            <span><Typewriter 
                                words={[`>status: ${props.status}`]}
                                loop={1}
                                typeSpeed={30}
                            /></span>
                            <span>&gt;<a href={props.link} target="_blank" className=" hover:scale-102 underline">RUN {props.words}.exe</a></span>
                            
                            </div></>
                        )
                        )
                    }
                    </div>
                    </div>}
                </h1>
            </div>
        </div>
        </>
    )
}