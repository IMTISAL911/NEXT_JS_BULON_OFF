


// "use client";

// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { turnOn, turnOff } from "./redux/bulbSlice";
// import Link from "next/link";

// export default function Home() {
//   const dispatch = useDispatch();
//   const { image, isOn } = useSelector((state) => state.bulb);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div
//         className={`w-1/2 min-h-screen flex justify-center items-center
//         ${
//           isOn
//             ? "border-2 border-yellow-400 shadow-[0_0_60px_20px_rgba(255,255,0,0.7)]"
//             : "border-2 border-gray-400"
//         }`}
//       >
//         <Image src={image} alt="Bulb" width={200} height={200} />

//         <div className="absolute mt-[25%] flex gap-4">
//           <button
//             onClick={() => dispatch(turnOn())}
//             className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-400"
//           >
//             TURN-ON
//           </button>

//           <button
//             onClick={() => dispatch(turnOff())}
//             className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-400"
//           >
//             TURN-OFF
//           </button>
//         </div>
//         <Link href="/counter">GO TO COUNTER PAGE</Link>
//       </div>
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { turnOn, turnOff } from "./redux/bulbSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const { image, isOn } = useSelector((state) => state.bulb);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div
        className={`flex flex-col items-center justify-center w-full max-w-md p-6 rounded-lg
        ${
          isOn
            ? "border-2 border-yellow-400 shadow-[0_0_60px_20px_rgba(255,255,0,0.7)]"
            : "border-2 border-gray-400"
        }`}
      >
        {/* Bulb Image */}
        <Image src={image} alt="Bulb" width={200} height={200} className="mb-6" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full justify-center">
          <button
            onClick={() => dispatch(turnOn())}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            TURN-ON
          </button>
          <button
            onClick={() => dispatch(turnOff())}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            TURN-OFF
          </button>
        </div>

        {/* Link Text */}
        <Link
          href="/counter"
          className="text-blue-600 font-semibold hover:underline mt-2"
        >
          GO TO COUNTER PAGE
        </Link>
      </div>
    </div>
  );
}
