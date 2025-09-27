import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="bg-blue-300 border-black w-48">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Travel Planning</Link></li>
                <li><Link to='/experiences'>Experiences</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/booking'>Booking</Link></li>
            </ul>
        </nav>
    )
}