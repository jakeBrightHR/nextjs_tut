'use client';
import { motion } from "framer-motion";
import AnimatingCircle from "../ui/hover/animating-circle";

export default function Page() {
    return (
        <div className=" justify-items-center items-center w-full h-screen place-content-center px-4 py-12 text-slate-90 bg-black">
            <AnimatingCircle />
            <h1 className="text-6xl font-bold text-white px-10 py-20">
                Hello there
                <span className="inline-block px-2">
                    <motion.div
                        className="w-[20px] h-[20px] bg-orange-400 rounded-full"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    />
                </span>
            </h1>
        </div>
        // <div className="grid grid-cols-2 justify-items-center items-center w-full h-screen place-content-center px-4 py-12 text-slate-90 bg-black">
        //     {/* <TiltCard /> */}

        //     {/* <TiltDog /> */}
        //     <AnimatingCircle />
        //     <h1 className="text-6xl font-bold text-white">Hello there</h1>
        //     <motion.div
        //         className="w-[20px] h-[20px] bg-orange-400"
        //     />
        //     <p className="text-white">My mother has <span className="text-blue-400">blue</span> eyes.</p>
        // </div>
    );
}