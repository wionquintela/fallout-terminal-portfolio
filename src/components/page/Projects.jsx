import Separator from "../Separator"
import { Typewriter, Cursor } from "react-simple-typewriter"
export default function Projects() {
    return(
        <>
        <div className="">
            <Separator count={10}/>
           <div className="flex flex-row"><Typewriter
            words={['Project List']}
            loop={0}
            typeSpeed={100}
            /><Cursor cursorStyle="_"/></div>
            <Separator count={10}/>
        </div>
        </>
    )
}