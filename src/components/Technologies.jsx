import {RiReactjsLine} from "react-icons/ri"
import { BiLogoSpringBoot } from "react-icons/bi";
import { FcAndroidOs } from "react-icons/fc";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandDocker } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { animate, motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: {y:-5},
    animate: {
        y: [5,-5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-4xl border-4 border-neutral-500 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <BiLogoSpringBoot className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <FcAndroidOs className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <DiNodejs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <BiLogoPostgresql className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <DiRedis className="text-7xl text-red-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <SiApachekafka className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <IoLogoFirebase className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <TbBrandDocker className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(9)}
            initial="initial"
            animate="animate" className="rounded-4xl border-4 border-neutral-500 p-4">
                <RiNextjsFill className="text-7xl text-blue-400"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies