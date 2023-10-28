import { useState } from "react"
import Card from "./Card"
import { FiChevronLeft , FiChevronRight } from "react-icons/fi"

const Testimonials = ({reviews}) => {
  const [index ,setIndex] = useState(0);
    function rightShiftHandeler() {
      if( index +1 >= reviews.length){
        setIndex(0);
      }else{
        setIndex(index+1);
      }
    }

    function leftShiftHandeler() {
      if(index-1 < 0){
        setIndex(reviews.length-1);
      }else{
        setIndex(index-1);
      }

    }

    function surpriseHandeler(){
      const randomData = Math.floor(Math.random() * 5);
      setIndex(randomData);
    }

   return (

    <div className="bg-white rounded-md w-[85vw] md:w-[700px] mt-10 p-10 transition-all duration-700 hover:shadow-lg">
        <Card  rev = { reviews[index] } />

        <div className="flex justify-center items-center text-3xl mt-5 font-bold text-violet-400">
            <button  onClick={leftShiftHandeler} className="cursor-pointer hover:text-violet-500" >
                <FiChevronLeft/>
            </button>

            <button onClick={rightShiftHandeler} className="cursor-pointer hover:text-violet-500" >
                <FiChevronRight/>
            </button>
        </div>

        <div className="text-center mt-4 mb-4">
            <button onClick={surpriseHandeler}
             className="bg-violet-400 hover:bg-violet-500 transition-all 
             duration-200 cursor-pointer px-10 py-2 rounded-md font-bold
              text-white text-lg">Suprise me </button>
        </div>
    </div>
  )
}

export default Testimonials