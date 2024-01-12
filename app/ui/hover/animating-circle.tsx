'use client';
import { motion } from "framer-motion";
import { useRef } from 'react';
import { useFollowPointer } from "./use-follow-pointer";

export default function AnimatingCircle() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <div
            className="fixed top-0 left-0 mix-blend-difference"
            style={{ transform: `translate(${x}px, ${y}px)` }}
        >
            <motion.div
                ref={ref}
                className="bg-white w-[50px] h-[50px]"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['0%', '0%', '50%', '50%', '0%']
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                }}
            />
        </div>
    )
};