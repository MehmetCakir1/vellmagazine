import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingleAuthor = ({item}) => {
    const navigate=useNavigate()
    console.log(item)

    useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
  return (
    <div
        className="w-[190px] h-[200px]  sm:w-[247px] sm:h-[365px] cursor-pointer relative rounded-lg"        
      >
        <img src={item.img} alt="image" className="absolute left-0 top-0 w-full h-full object-cover -z-10 " 
        />
        <div className="block absolute left-0 top-0 w-full h-full text-center text-2xl font-serif pt-3 px-1 "
        onClick={()=>navigate(`/author/${item.name}`,{state:item.name})}     >
        <p className= "text-[rgba(13, 4, 9, 0.73)] text-[20px]  absolute bottom-0 left-0 w-full text-center bg-white/40 font-serif py-[0.3rem]">{item.name}
        <br/> {item.name2}
        </p>
        {/* <h3 className={`${show && "hidden"} absolute bottom-2 left-[50%] translate-x-[-50%] text-[#503C3B] w-full text-3xl  readmore`}> Read More...</h3> */}
      </div>
      </div>     
  )
}

export default SingleAuthor