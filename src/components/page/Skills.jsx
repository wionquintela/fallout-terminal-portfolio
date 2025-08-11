import Separator from "../Separator";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Skills() {
    const [done, setDone] = useState(false);

    const skills = [
        {
            skill: "HTML5 Protocol",
            status: "ONLINE"
        }, {
            skill: "CSS3 Styling Engine",
            status: "STABLE"
        }, {
            skill: "JavaScript Runtime",
            status: "VERIFIED"
        }, {
            skill: "ReactJS Library",
            status: "ACTIVE"
        },{
            skill: "Tailwind CSS Utility Grid",
            status: "OPTIMIZED"
        }, {
            skill: "Git Version Control",
            status: "SYNCED"
        }, {
            skill: "Problem Solving Module",
            status: "FUNCTIONAL"
        }, {
            skill: "Communication Subroutine",
            status: "ENGAGED"
        }
    ]
    const [subtext] = useTypewriter({
        words: ['Requesting Skillset Matrix...', 'Verifying Skills...', 'Accessing /wion/skillset/config.js'],
        loop: 1,
        typeSpeed: 8,
        deleteSpeed: 6,
        onLoopDone: () => setDone(true)
    })
    return(
        <>
        <div className="p-5">
            <Separator shape={"="} count={10}/>
           <div className="flex flex-row"><Typewriter
            words={['portfolio/adminSkills']}
            loop={1}
            typeSpeed={8}
            /><Cursor cursorStyle="_"/></div>
            <Separator shape={"="} count={10}/>
            <div className="">
                <h1>&gt;&gt;
                   {subtext}{!done ? (<Cursor cursorStyle="_"/>): ""}

                    {done && <div className="pt-3">
                        <div className="pl-2 flex flex-col gap-5">
                        <Typewriter 
                        words={['[LOG ENTRY #019]']}
                        loop={1}
                        typeSpeed={10}
                        />
                    {
                        skills.map((props, index) => {
                        //     const skillLength = props.skill.length;
                        //     const statsLength = props.status.length;
                        //     const length = statsLength - skillLength;
                        //    const separatorCount = Math.max(0, 10 - length);

                            return (<div className="pl-10 flex flex-row">
                                <span className="flex flex-row">
                                    <Typewriter 
                                        words={[`>${props.skill}`]}
                                        loop={1}
                                        typeSpeed={30}
                                    /><Separator shape={"."} count={20}/>{!done ? <Cursor cursorStyle="_"/> : ""}
                                </span>
                                <span className="">
                                    <Typewriter 
                                        words={[`${props.status}`]}
                                        loop={1}
                                        typeSpeed={30}
                                    />{!done ? <Cursor cursorStyle="_"/> : ""}
                                </span>
                            </div>)
                            }
                        )
                    }

                    <div className="flex flex-col">
                        <Typewriter 
                        words={['[STATUS]']}
                        loop={1}
                        typeSpeed={10}
                        />
                        <div className="flex flex-row pl-10 pt-4 gap-2">
                            <span>
                            <Typewriter 
                        words={['>Developer Readiness: ']}
                        loop={1}
                        typeSpeed={10}
                        />
                        </span>
                        <span>
                            <Typewriter 
                        words={['96%']}
                        loop={1}
                        typeSpeed={10}
                        />
                        </span>
                        </div>
                        <div className="flex flex-row pl-10 gap-2">
                            <span>
                            <Typewriter 
                        words={['>Growth Trajectory: ']}
                        loop={1}
                        typeSpeed={10}
                        />
                        </span>
                        <span className="animate-pulse">
                            <Typewriter 
                        words={['POSITIVE']}
                        loop={1}
                        typeSpeed={10}
                        />
                        </span>
                        </div>
                    </div>
                    </div>
                    </div>}
                </h1>
            </div>
        </div>
        </>
    )
}