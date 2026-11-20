import SocialLinks from "../common/SocialLinks"

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>© {currentYear} Christian Libanag. Built with React.</p>
            <SocialLinks className="footer-socials" />
            <a href="#hero" className="back-to-top">Back to top ↑</a>
        </footer>  
    )
}