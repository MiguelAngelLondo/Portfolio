import { ItemNavbar } from "../../Components/ItemNavbar/ItemNavbar"
import { Navbar } from "../Navbar/Navbar"
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'
import { Route,Routes } from "react-router-dom"
import "./Footer.css"
export const  Footer = () =>{
return(
    <footer className="footer">
        <h4>CREATED PAGE FOR <strong> MIGUEL ANGEL LONDOÑO MARULANDA</strong></h4>
        <Navbar>
        <ItemNavbar Route="/" content={<FaWhatsapp/>}/>
        <ItemNavbar Route="/" content={<FaFacebook/>}/>
        <ItemNavbar Route="/" content={<FaInstagram/>}/>
        <ItemNavbar Route="/" content={<FaGithub/>}/>
        </Navbar>
    </footer>
)
}