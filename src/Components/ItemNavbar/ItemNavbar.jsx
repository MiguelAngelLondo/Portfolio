import { NavLink } from "react-router-dom"
export const ItemNavbar = ({content,Route}) => {
    return (
      <li>
      <NavLink className='anchor-header' to={Route} id="text">{content}</NavLink>
      </li>
    )
  }