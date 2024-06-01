import {HERO_CONTENT} from "../constants/index.js";
import profilePic from "../assets/Shubham.jpg"
// eslint-disable-next-line no-unused-vars
import profilePic2 from "../assets/Shubham 2_1.jpg"
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})
const Hero = () => {
    return (
        <section className={'border-b border-neutral-900 pb-4 mb-10'}>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center text-center md:items-start md:text-start ">
                        <motion.h1 variants={container(0)}
                                   initial={"hidden"}
                                   animate={"visible"}
                                   className={'pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'}>
                            Shubham Salunkhe
                        </motion.h1>
                        <motion.span variants={container(0.4)}
                                     initial={"hidden"}
                                     animate={"visible"}
                                     className={'lg:ps-1 bg-gradient-to-r from-red-500 via-cyan-300 to-purple-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent'}>
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(0.8)}
                                  initial={"hidden"}
                                  animate={"visible"}
                                  className={'my-2 max-w-xl py-6 font-light tracking-tighter text-justify'}>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img initial={{x: 100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 1, delay: 1}}
                                    className={'lg:max-w-[400px] md:max-w-[300px] w-auto object-contain rounded-2xl'}
                                    src={profilePic} alt="Shubham salunkhe"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;