// javascript
import {useRef} from 'react'
import {PROJECTS} from '../constants/index.js'
import {motion, useInView} from 'framer-motion'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'

const leftVariants = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7}},
    exit: {opacity: 0, x: -100, transition: {duration: 0.5}}
}

const rightVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7}},
    exit: {opacity: 0, x: 100, transition: {duration: 0.5}}
}


const Projects = () => {
    const imgRef = useRef(null)
    const imgInView = useInView(imgRef, {once: false, amount: 0.3})

    const contentRef = useRef(null)
    const contentInView = useInView(contentRef, {once: false, amount: 0.3})
    return (
        <section className={'border-b border-neutral-900 pb-4'}>
            <motion.h2
                variants={leftVariants}
                initial="hidden"
                animate="visible"
                className={'my-20 text-center text-4xl'}>
                Projects
            </motion.h2>

            {PROJECTS.map((project, index) => (
                <div key={index} className={'mb-8 flex flex-wrap lg:justify-center'}>
                    <motion.div
                        ref={imgRef}
                        variants={leftVariants}
                        initial="hidden"
                        animate={imgInView ? 'visible' : 'exit'}
                        className="w-full lg:w-1/4 flex lg:justify-start justify-center ">
                        <a href={project.link !== 'NA' ? project.link : project.github} target={'_blank'}
                           rel="noopener noreferrer">
                            <img className={'size-44 mb-6 rounded'} src={project.image} alt={project.title}/>
                        </a>
                    </motion.div>

                    <motion.div
                        ref={contentRef}
                        variants={rightVariants}
                        initial="hidden"
                        animate={contentInView ? 'visible' : 'exit'}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className={'mb-2 font-semibold flex'}>
                            {project.title}
                            {project.github === 'NA' ? null : (
                                <a href={project.github} target={'_blank'} rel="noopener noreferrer">
                                    <FaGithub className={'mt-1 ms-3 size-5'}/>
                                </a>
                            )}
                            {project.link === 'NA' ? null : (
                                <a href={project.link} target={'_blank'} rel="noopener noreferrer">
                                    <FaExternalLinkAlt className={'mt-1 ms-3 size-3.5'}/>
                                </a>
                            )}
                        </h6>

                        <p className={'mb-4 text-neutral-400'}>{project.description}</p>

                        {project.technologies.map((technology, techIdx) => (
                            <span key={techIdx}
                                  className={'mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'}>
                        {technology}
                    </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </section>
    )
}

export default Projects
