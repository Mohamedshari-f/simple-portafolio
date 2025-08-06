import { Route, Routes } from "react-router-dom"
import About from "./components/about"
import Contact from "./components/contacs"
import Header from "./components/sidebar"
import Home from "./components/home"
import Preview from "./components/previewevent"
import Fullview from "./components/fullview"




function App(){
  
  return <>
   
 
 
    <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />  } />
        <Route path="/" element={<Preview />  } />
        <Route path="/events" element={<Fullview />  } />
        
       

        </Routes>

  </>
  
}
export default App