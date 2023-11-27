import { useEffect } from "react"
import './styles.css'
  import { Gradient } from './gradient.js'
export default () => {


// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas

  useEffect(() => {
   gradient.initGradient('#gradient-canvas')
  }, []);
  return <canvas id="gradient-canvas" data-transition-in  style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}/>
}