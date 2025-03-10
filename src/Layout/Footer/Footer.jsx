import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <h4>CREATED PAGE FOR <strong>MIGUEL ANGEL LONDOÑO MARULANDA</strong></h4>
            <div className="network">
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </footer>
    );
}