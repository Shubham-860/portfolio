import {RiReactjsLine, RiTailwindCssFill} from "react-icons/ri";
import {SiMongodb, SiMysql} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa6";
import {TbBrandNextjs} from "react-icons/tb";
import {motion} from "framer-motion"

const iconVariants = delay => ({
    initial: {y: -15},
    animate: {
        y: [15, -15],
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay
        }
    }
})
const Technologies = () => {
    return (
        <section className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0,y:-50}}
                transition={{duration:1}}
                className={'my-20 text-center text-4xl'}>Technologies</motion.h2>
            <motion.div
                whileInView={{opacity: 1, }}
                initial={{opacity: 0}}
                transition={{duration:2}}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div variants={iconVariants(0)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className={'text-7xl text-cyan-400'}/>
                </motion.div>
                <motion.div variants={iconVariants(0.5)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className={'text-7xl'}/>
                </motion.div>
                <motion.div variants={iconVariants(1)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className={'text-7xl text-green-500'}/>
                </motion.div>
                <motion.div variants={iconVariants(1.5)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className={'text-7xl text-green-500'}/>
                </motion.div>
                <motion.div variants={iconVariants(2)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className={'text-7xl text-blue-400'}/>
                </motion.div>
                <motion.div variants={iconVariants(2.5)}
                            initial={"initial"}
                            animate={'animate'}
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className={'text-7xl text-cyan-400'}/>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Technologies;