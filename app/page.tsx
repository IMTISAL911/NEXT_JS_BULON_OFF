// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { turnOn,turnOff } from "../app/redux/bulbSlice";

// export default function Home () {

//   // const [imge,setImage] = useState ("/bulbof.png");
//   // const [isOn, setIson] = useState (false)

//   // const bulbON =() =>{
//   //   setImage("/bulb-on.webp");
//   //   setIson(true);
//   // }

//   // const bulbOff = () =>{
//   //   setImage("/bulbof.png");
//   //   setIson(false);
//   // }

//   const dispatch = useDispatch();
//   const { image, isOn } = useSelector((state) => state.bulb);


//   return(
//     <div className="flex justify-center  ">
     
//      <div className={` border-2 border-gray-400 w-1/2 min-h-screen flex justify-center items-center

//      ${
//          isOn ? "border-2 border-yellow-400 shadow-[0_0_60px_20px_rgba(255,255,0,0.7)]"
//          : "border-2 border-gray-400"            
//       }

//      `}>
  
//  <Image
//           src={image}
//           alt="Bulb"
//           width={200}
//           height={20}
//         />
// <div className="absolute mt-[25%] flex gap-4">
// <button onClick={()=> dispatch(turnOn())} className="bg-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200">TURN-ON</button>
// <button onClick={()=> dispatch(turnOff())} className="bg-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400  transition duration-200">TURN-OFF</button>
// </div>
//      </div>

//     </div>
//   )

// }



"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { turnOn, turnOff } from "./redux/bulbSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { image, isOn } = useSelector((state) => state.bulb);

  return (
    <div className="flex justify-center">
      <div
        className={`w-1/2 min-h-screen flex justify-center items-center
        ${
          isOn
            ? "border-2 border-yellow-400 shadow-[0_0_60px_20px_rgba(255,255,0,0.7)]"
            : "border-2 border-gray-400"
        }`}
      >
        <Image src={image} alt="Bulb" width={200} height={200} />

        <div className="absolute mt-[25%] flex gap-4">
          <button
            onClick={() => dispatch(turnOn())}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-400"
          >
            TURN-ON
          </button>

          <button
            onClick={() => dispatch(turnOff())}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-400"
          >
            TURN-OFF
          </button>
        </div>
      </div>
    </div>
  );
}

