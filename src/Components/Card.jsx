
import {FaQuoteLeft , FaQuoteRight} from "react-icons/fa"

const Card = ({rev}) => {
    

  return (
    <div className="flex flex-col relative  my-0 mx-auto  mt-12 " >
        <div className="absolute top-[-7rem] z-[10] mx-auto ">
            <img 
            className="aspect-square rounded-full w-[140px] h-[140px] z-[20] "
            src={rev.image} alt="" />

            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute
            top-[-6px] z-[-10] left-[10px]"></div>
        </div>

        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize">{rev.name}</p>
            <p className="text-purple-300 uppercase text-sm">{rev.job}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <FaQuoteLeft className="text-violet-400 mx-auto mt-5"/ >
            <p className="text-center mt-4 text-slate-500 ">{rev.text}</p>
            <FaQuoteRight className="text-violet-400 mx-auto mt-5"/>
        </div>

        

    </div>
  )
}

export default Card