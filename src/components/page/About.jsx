import Separator from "../Separator";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function About() {
    const [done, setDone] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [shownText, setShownText] = useState("");
    // const handleOnMouseEnter = () => setIsHovered(true);
    // const handleOnMouseLeave = () => setIsHovered(false);
    function handleOnMouseEnter(text) {
        setIsHovered(true);
        setShownText(text);
        
    }

    function handleOnMouseLeave() {
        setIsHovered(false);
    }

    const date = Date();
    const sysLogs = [
        {
           text: "Designated ID: #VX-4306 WION QUINTELA",
        }, {
           text: `Structural Elevation: 170cm/5'7"`,
        }, {
           text: "Mass Ratio: 67kg/147lbs",
        },  {
           text: "Life Cycle Index: 19 Years",
        },   {
           text: `Function Protocol: FRONTEND DEVELOPER/College Student`
        },{
           text: `STATUS: ACTIVE`
        }, {
           text: "LOCATION: [REDACTED]"
        }
    ]
    const [subtext] = useTypewriter({
        words: ['Retrieving Personnel File: Wion...', 'Decryption Key: VALID', 'File Integrity: 100%', "Displaying Biometrics..."],
        loop: 1,
        typeSpeed: 8,
        deleteSpeed: 6,
        onLoopDone: () => setDone(true)
    })

    const bio = [{
        words: "Strength",
        value: "9/10"
    },{
        words: "Perception",
        value: "7/10"
    }, {
        words: "Endurance",
        value: "7/10"
    }, {
        words: "Charisma",
        value: "3/10"
    }, {
        words: "Intelligence",
        value: "6/10"
    }, {
        words: "Agility",
        value: "7/10"
    }, {
        words: "Luck",
        value: "10/10"
    }]
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
                    <h1 key={index}>&gt;&gt;<Typewriter
                    words={[`${props.text}`]}
                    loop={1}
                    typeSpeed={8}
                    /></h1>
                ))}
                <h1>&gt;&gt;
                   {subtext}{!done ? (<Cursor cursorStyle="_"/>): ""}</h1>
                
                   
                    {done && <div className="pt-5">
                        <div className="flex flex-col gap-5">
                        <span className=" flex flex-row">
                            <span className="animate-pulse pr-1">
                                <Typewriter words={['S.P.E.C.I.A.L']} loop={1} typeSpeed={40} deleteSpeed={35} />
                            </span>
                            <Typewriter words={['Stats']} loop={1} typeSpeed={40} deleteSpeed={35} />
                        </span>
                        <div className="flex flex-row flex-wrap">
                    <div className="w-full sm:w-1/2">
                    {
                        bio.map((props, index) => (
                              <div className="pl-5 flex flex-col gap-5" key={index}>
                                <div  className=""  onMouseEnter={() => handleOnMouseEnter(props.words)} onMouseLeave={ handleOnMouseLeave}>
                             <span className=""><Typewriter 
                                    words={[`>${props.words}`]}
                                    loop={1} typeSpeed={40} deleteSpeed={35}
                                    /></span>..........<Typewriter words={[`${props.value}`]}
                                    loop={1} typeSpeed={40} deleteSpeed={35}/> 
                             </div>
                              </div>
                                   
                                
                        ))
                    }</div>   
                    {/* <Typewriter 
                    words={[`>${shownText}`]}
                    typeSpeed={6}
                    deleteSpeed={1}
                    delaySpeed={0}
                    loop={1}
                    />     */}
                    <div className="w-full sm:w-1/2 text-center">{isHovered ? (`${shownText}`): 'not hovering anything'}</div>
                    </div></div>
                    </div>}
            </div>
        </div>
        </>
    )
}