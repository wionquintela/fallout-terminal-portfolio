import Separator from '../Separator';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import AnimatedList from "../AnimatedList";


export default function LeftPanel({done, typeEffect, setActivePanel, activePanel}) {
  
  return (
    <>
     <div className="col-span-2 sm:col-span-1  sm:h-screen p-5">
        <div className="flex flex-col">
      <Separator shape={"="} count={35}/>
      <div className="flex flex-row"><Typewriter 
      words={["Welcome to WIONCo Terminal (TM) @ 2025"]}
      loop={1}
      typeSpeed={5}
      /></div>
      <Separator shape={"="} count={35}/>
       <Typewriter 
        words={[`SESSION: ${Date()}`]}
        loop={1}
        typeSpeed={5}
        />
      <h1 className="pt-2 pb-2 flex flex-row">&gt;&gt;{typeEffect}{!done ? (<Cursor cursorStyle="_"/>): ""}</h1>
      {done && (<>
      <AnimatedList setActivePanel={setActivePanel} activePanel={activePanel}/>
      </>)}<Cursor cursorStyle="_" />
    </div> 
     </div>
    </>
  )
}

