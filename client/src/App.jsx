import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Tech from "./components/Tech"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Footer from "./components/Footer"
import BackgroundVideo from "./components/BackgroundVideo"


function App() {

  // useEffect(() => {
  //   const audio = new Audio('/Coldplay - A Sky Full Of Stars (Official audio).mp3');
  //   audio.play();

  //   return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };
  // }, []);
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <BrowserRouter>
    
      <div className="ddd">
        {isPlaying && <BackgroundVideo />}
        <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <About />
        <Tech />
        <Project />
        <Contact />
        <Nav />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
