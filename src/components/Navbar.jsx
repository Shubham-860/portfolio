import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src="src/assets/ss.png" alt="logo" className="h-10 w-10 mx-6"/>
            </div>
            <div className={'m-8 flex items-center justify-center gap-4 text-2xl'}>
                <FaLinkedinIn/>
                <FaGithub/>
                <FaSquareXTwitter/>
                <FaInstagram/>
            </div>
        </nav>
    );
};

export default Navbar;