import {HERO_CONTENT} from "../constants/index.js";
import profilePic from "../assets/Shubham.jpg"
const Hero = () => {
    return (
        <div className={'border-b border-neutral-900 pb-4 mb-10'}>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center text-center md:items-start md:text-start ">
                        <h1 className={'pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'}>
                            Shubham Salunkhe
                        </h1>
                        <span
                            className={'lg:ps-1 bg-gradient-to-r from-red-500 via-cyan-300 to-purple-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent'}>
                            Full Stack Developer
                        </span>
                        <p className={'my-2 max-w-xl py-6 font-light tracking-tighter text-justify'}>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className={'lg:max-w-[400px] md:max-w-[300px] w-auto object-contain rounded-2xl'} src={profilePic} alt="Shubham salunkhe"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;