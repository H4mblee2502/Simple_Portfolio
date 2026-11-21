import SocialLinks from "../common/SocialLinks";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© {currentYear} Christian Libanag. Built with React.</p>
      </div>

      <div className="footer-right">
        <SocialLinks className="footer-socials" />
      </div>
    </footer>
  );
}