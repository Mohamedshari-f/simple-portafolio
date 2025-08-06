import { NavLink } from "react-router-dom";

function Header(){
    return <div className="flex gap-10 justify-between "> 
    
        <h1>MY portafolio</h1>
    
    <NavLink to="/">Home</NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/contacs">Contact</NavLink>
   
    </div>
}
export default Header