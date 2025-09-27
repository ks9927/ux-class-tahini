import { Link } from "react-router-dom";
import BookBtn from "./BookBtn";

export default function Footer() {
    return (
        <div className="bg-blue-200 p-7 flex gap-7 justify-center">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Travel Planning</Link></li>
            </ul>

            <ul>
                <li><Link to='/experiences'>Experiences</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <ul>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/privacy'>Privacy Policy</Link></li>
            </ul>

            <ul>
            <li><BookBtn /></li>
            <li className="text-center">Copyright 2025</li>
            </ul>

        </div>
    )
}