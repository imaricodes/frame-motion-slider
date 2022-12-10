
import "./App.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import images from './images'

function App() {

const [width, setWidth] = useState(0);
const carousel = useRef()

useEffect( ()=>{
console.log(carousel.currenti)
  
}, [])

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{right: 0, left: 0}} className="inner-carousel">
          {images.map( (image, index) => {
            let id = index
            console.log(`id ${id}`)
            return (
              <motion.div key={`img${index}`} className="item">
                <img src={image} alt=''/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

<style>

</style>

export default App;
