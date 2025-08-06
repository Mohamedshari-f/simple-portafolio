import { NavLink } from "react-router-dom"

function Header(){
    return <div className="flex justify-around font-semibold"> 
    <h1>Portafolio</h1>
    <ul className="flex gap-10">
<NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/about"><li>About</li></NavLink>
    <NavLink to="/contact"><li>Contact</li></NavLink>
   </ul>
    </div>
}
export default Header