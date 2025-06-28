import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className="text-5xl text-indigo-500 font-bold p-20">umaidRather</div>
    )
}
export default App
