import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import { act, useState } from "react";
import LeftPanel from './components/page/LeftPanel';
import RightPanel from './components/page/RightPanel';


function App() {
  const [done, setDone] = useState(false);
  const [activePanel, setActivePanel] = useState("");
  const [typeEffect] = useTypewriter({
    words: ['Initializing user interface...', 'Establishing secure connection...', 'Decrypting assets ██████████ 100%','Accessing Portfolio...', "Granted.. Welcome to the website :-)"],
    loop: 1,
    typeSpeed: 4,
    deleteSpeed: 1,
    onLoopDone: () => setDone(true)
    
  })
  return (
    <>
    <div className="grid grid-cols-2 divide-x-4">
      <LeftPanel done={done} typeEffect={typeEffect} activePanel={activePanel} setActivePanel={setActivePanel}/>
      <RightPanel done={done} activePanel={activePanel}/>
    </div>
    </>
  )
}

export default App
