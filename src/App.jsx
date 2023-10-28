// import Testimonials from "./Components/Testimonials"
import Testimonials from "./Components/Testimonials"
import reviews from "./data"

function App() {
 
  return (
    <div className="bg-gray-300 h-screen flex justify-center flex-col items-center" >
          <p className="text-black font-semibold text-3xl ">Our Testimonials</p>
          <div className="border-b-4 w-28 border-purple-600 mt-3"></div>
          <Testimonials reviews = { reviews}/>
    </div>
  )
}

export default App
