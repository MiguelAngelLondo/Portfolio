import { Navbar } from '../Navbar/Navbar';
import "./Header.css";
import { ItemNavbar } from '../../Components/ItemNavbar/ItemNavbar';

export const Header = () => {
    return (
        <header className="header">
            <h1>Portfolio 💡</h1>
            <Navbar>
                <ul className="nav-list">
                    <ItemNavbar content="Home" Route="/" />
                    <ItemNavbar content="Technical Skills" Route="/technical-skills" />
                    <ItemNavbar content="Work Experience" Route="/work-experience" />
                    <ItemNavbar content="Certificates" Route="/certificates" />
                </ul>
            </Navbar>
        </header>
    );
}