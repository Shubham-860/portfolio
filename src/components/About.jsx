import aboutImg from '../assets/about.jpg'
import {ABOUT_TEXT} from "../constants/index.js";
import {motion} from "framer-motion"

const About = () => {
    return (
        <section className={'border-b border-neutral-900 pb-4'}>
            <h2 className={'my-20 text-center text-4xl'}>
                About
                <span className={'text-neutral-500'}> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="w-full lg:w-1/2 hidden lg:block lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className={"rounded-2xl"} src={aboutImg} alt="About me"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className={'my-2 max-w-xl py-6 text-justify'}>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </section>);
};

export default About;