import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function NavBar() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" end>🏠</NavLink>
            <NavLink to="/" product>🍔</NavLink>
            <NavLink to="/" profile>👤</NavLink>
            <NavLink to="/" favorites>❤️</NavLink>
        </nav>
    )
}