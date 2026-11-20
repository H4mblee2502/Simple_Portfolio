import SocialLinks from "../common/SocialLinks"

export default function Navbar(){
    return(
        <header className="navbar">
            <a 
                href="#hero"
                className="logo"
            >
                Ichan
            </a>
            <nav>
                <a href="#experience"> Work Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>                
            </nav>
        <SocialLinks className="social-media"/>

        </header>
    );
}