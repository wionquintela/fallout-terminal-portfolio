import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import { act, useState } from "react";
import LeftPanel from './components/page/leftPanel';
import RightPanel from './components/page/RightPanel';


function App() {
  const [done, setDone] = useState(false);
  const [activePanel, setActivePanel] = useState("");
  const [typeEffect] = useTypewriter({
    words: ['Loading Portfolio...', 'Now Showing Portfolio'],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 40,
    onLoopDone: () => setDone(true)
    
  })
  return (
    <>
    <div className="flex flex-row">
      <LeftPanel done={done} typeEffect={typeEffect} activePanel={activePanel} setActivePanel={setActivePanel}/>
      <RightPanel activePanel={activePanel}/>
    </div>
    </>
  )
}

export default App
