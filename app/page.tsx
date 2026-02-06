"use client";

import Image from "next/image";
import { useState } from "react";
// import bulbof from "../public/bulbof.png"
export default function Home () {

  const [imge,setImage] = useState ("/bulbof.png");

  const bulbON =() =>{
    setImage("/bulb-on.webp");
  }

  const bulbOff = () =>{
    setImage("/bulbof.png")
  }

  return(
    <div className="flex justify-center  ">
     
     <div className=" border-2 border-gray-400 w-1/2 min-h-screen flex justify-center items-center">
  
 <Image
          src={imge}
          alt="Bulb"
          width={200}
          height={20}
        />
<div className="absolute mt-[25%] flex gap-4">
<button onClick={bulbON} className="bg-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200">TURN-ON</button>
<button onClick={bulbOff} className="bg-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400  transition duration-200">TURN-OFF</button>
</div>
     </div>

    </div>
  )

}

