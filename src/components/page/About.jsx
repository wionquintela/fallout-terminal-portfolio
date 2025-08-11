import Separator from "../Separator";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function About() {
    const [done, setDone] = useState(false);
    const date = Date();
    const sysLogs = [
        {
           text: "UNAUTHORIZED ACCESS DETECTED",
        }, {
           text: `Timestamp: ${date}`
        },{
           text: "IP Address: 1.***.*9.45*.*"
        }, {
           text: "This session is being monitored by the Enclave (TM)"
        }
    ]
    const [subtext] = useTypewriter({
        words: ['Retrieving Personnel File: Wion...', 'Decryption Key: VALID', 'File Integrity: 100%', "Displaying File..."],
        loop: 1,
        typeSpeed: 8,
        deleteSpeed: 6,
        onLoopDone: () => setDone(true)
    })
    return(
        <>
        <div className="p-5">
            <Separator shape={"="} count={20}/>
           <div className="flex flex-row"><Typewriter
            words={['portfolio/wion/bio']}
            loop={1}
            typeSpeed={8}
            /><Cursor cursorStyle="_"/></div>
            <Separator shape={"="} count={20}/>
            <div className="">
                {sysLogs.map((props,index) => (
                    <h1>&gt;&gt;<Typewriter
                    words={[`${props.text}`]}
                    loop={1}
                    typeSpeed={8}
                    /></h1>
                ))}
                <h1>&gt;&gt;
                   {subtext}{!done ? (<Cursor cursorStyle="_"/>): ""}</h1>
                
                   
                    {done && <div className="pt-5">
                        <div className="flex flex-col gap-5">
                    {/* {
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
                            />{!done ? (<Cursor cursorStyle="_"/>): ""}</span>
                            <span><Typewriter 
                                words={[`>status: ${props.status}`]}
                                loop={1}
                                typeSpeed={30}
                            />{!done ? (<Cursor cursorStyle="_"/>): ""}</span>
                            <span>&gt;<a href={props.link} target="_blank" className=" hover:scale-102 underline"><Typewriter 
                                words={[`Run ${props.words}.exe`]}
                                loop={1}
                                typeSpeed={30}
                            /></a><Cursor cursorStyle="_"/></span>
                            
                            </div></>
                        )
                        )
                    } */}
                    </div>
                    </div>}
            </div>
        </div>
        </>
    )
}