import Separator from '../Separator';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import AnimatedList from "../AnimatedList";


export default function LeftPanel({done, typeEffect, setActivePanel, activePanel}) {
  
  return (
    <>
     <div className="w-1/2 border h-screen p-5">
        <div className="flex flex-col">
      <Separator count={25}/>
      <div className="flex flex-row"><Typewriter 
      words={["Welcome to WIONCo Terminal (TM)"]}
      loop={1}
      /><Cursor cursorStyle="_" /></div>
      <Separator count={25}/>
      
      <h1 className="pt-2 pb-2 flex flex-row">&gt;&gt;{typeEffect}<Cursor cursorStyle="_" /></h1>

      {done && (<>
      <AnimatedList setActivePanel={setActivePanel} activePanel={activePanel}/>
      </>)}
    </div> 
     </div>
    </>
  )
}

