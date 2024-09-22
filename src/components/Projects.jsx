import {PROJECTS} from "../constants/index.js";
import {motion} from "framer-motion"
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

const Projects = () => {
    return (
        <section className={'border-b border-neutral-900 pb-4'}>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -50}}
                transition={{duration: 0.7}}
                className={'my-20 text-center text-4xl'}>Projects
            </motion.h2>
            {PROJECTS.map((project, index) => (
                <div key={index} className={'mb-8 flex flex-wrap lg:justify-center'}>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{delayChildren: 0.5}}
                        className="w-full lg:w-1/4 flex lg:justify-start justify-center ">
                        <a href={project.link !== "NA" ? project.link : project.github} target={'_blank'}>
                            <img className={'size-44 mb-6 rounded'} src={project.image} alt={project.title}/>
                        </a>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{delayChildren: 0.5}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className={'mb-2 font-semibold flex'}>
                            {project.title}
                            {project.github === "NA" ? null :
                                <a href={project.github} target={'_blank'}>
                                    <FaGithub className={'mt-1 ms-3 size-5'}/>
                                </a>
                            }
                            {project.link === "NA" ? null :
                                <a href={project.link} target={'_blank'}>
                                    <FaExternalLinkAlt className={'mt-1 ms-3 size-3.5'}/>
                                </a>
                            }
                        </h6>
                        <p className={'mb-4 text-neutral-400'}>{project.description}</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index}
                                  className={'mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'}>
                                {technology}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </section>
    );
};

export default Projects;