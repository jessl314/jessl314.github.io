
import "./NavBar.css"

const NavBar = ({ scrollTo, refs }) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50 nav-bar">
            <ul className="flex space-x-4 justify-end nav-text">
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.heroRef)}>Home</li>
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.aboutRef)}>About</li>
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.projectsRef)}>Projects</li>

            </ul>
        </nav>
    )
}

export default NavBar;