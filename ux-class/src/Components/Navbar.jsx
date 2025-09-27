import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="bg-blue-300 p-6">
            <ul className="flex gap-7 justify-center items-center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Travel Planning</Link></li>
                <li><Link to='/experiences'>Experiences</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li className="bg-green-300 border-solid border-black border-2 rounded-lg hover:bg-green-200">
                    <Link className="inline-block px-3 py-2 align-middle" to='/booking'>Book Your Trip</Link>
                </li>
            </ul>
        </nav>
    )
}

