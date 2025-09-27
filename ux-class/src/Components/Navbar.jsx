import { Link } from "react-router-dom"
import BookBtn from "./BookBtn"

export default function Navbar() {
    return(
        <nav className="bg-blue-300 p-6">
            <ul className="flex gap-7 justify-center items-center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Travel Planning</Link></li>
                <li><Link to='/experiences'>Experiences</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><BookBtn /></li>
            </ul>
        </nav>
    )
}

