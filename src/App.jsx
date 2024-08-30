import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  const legacy =[ {
      word: <span><span style={{color: "#FFC107"}}>LEG</span>acy?</span>,
      hmmm:<span> and sea <span style={{color: "#FFC107"}}>on foot</span></span>
  },
  {
    word: <span>a <span style={{color: "#FFC107"}}>step</span> at a time</span>,
  }];
  //FFC107 color dark
  //FFECB3 color light
  let heroData = [
    {text1:"What is your",text2:legacy[0].word},
    {text1:"Explore the world",text2:legacy[1].word},
    {text1:"The ground is your",text2:"starting point"}
  ]
  const [heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(false);
  
  useEffect(
    ()=>{
      const intervalId = setInterval(
        ()=>{
          setHeroCount(heroCount => (heroCount< 2? heroCount+1: 0));
            }, 5000);
        return()=> clearInterval(intervalId);
        }, []);
  return(
    <div>
        
        <Navbar />
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Hero 
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        <About />
        <Footer/>
    </div>
  )
}
export default App
