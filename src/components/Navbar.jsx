import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import ss from "../assets/ss.png"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={ss} alt="logo" className="h-10 w-10 mx-6"/>
            </div>
            <div className={'m-8 flex items-center justify-center gap-4 text-2xl '}>
                <FaLinkedinIn className={'hover:text-cyan-400 transition duration-500'}/>
                <a href="https://github.com/Shubham-860" target={'_blank'}>
                    <FaGithub
                    className={'hover:text-cyan-400 transition duration-500'}/>
                </a>
                <FaSquareXTwitter className={'hover:text-cyan-400 transition duration-500'}/>
                <FaInstagram className={'hover:text-cyan-400 transition duration-500'}/>
            </div>
        </nav>
    );
};

export default Navbar;