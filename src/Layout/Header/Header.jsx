import {Navbar} from '../Navbar/Navbar'
import { ItemNavbar } from '../../Components/ItemNavbar/ItemNavbar'
export const Header = () =>{

    return(
        <header className ="header">
            <Navbar>
                <ul>
        <ItemNavbar content="Home" />
        <ItemNavbar content="technical skills" />
        <ItemNavbar content="Work Experience" />
        <ItemNavbar content="Certificates" />
                </ul>
            </Navbar>
          
        </header>
    )
}