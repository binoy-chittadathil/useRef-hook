import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import './App.css'
import { useRef, useState } from "react";

function App() {
  const [audi,setAudi]=useState(true);
  console.log(audi);
  const audioRef=useRef()
  function togle(){
    setAudi(!audi);
    console.log(audi);
    if(audi===true){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
  }

  return (
    <div>
      {audi ? <FaPlayCircle style={{fontSize:50}} onClick={togle} /> :
      <FaPauseCircle style={{fontSize:50}} onClick={togle} />}
      <audio src="/audio/aaromal.mp3" ref={audioRef}></audio>
    </div>
  )
}

export default App
