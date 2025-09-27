import { Link } from "react-router-dom";

export default function BookBtn() {
    return(
         <div className="bg-green-300 border-solid border-black border-2 rounded-lg hover:bg-green-200">
                    <Link className="inline-block px-3 py-2 align-middle" to='/booking'>Book Your Trip</Link>
                </div>
    )
}