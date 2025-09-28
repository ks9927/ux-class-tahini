import IntroText from "../Components/IntroText"

export default function Booking() {
    return(
       <div className="flex flex-col items-center px-4 py-8">
        <IntroText
        title="Booking"
        description="Ready to start your next adventure? Fill out the form below and a representative will get back to you."/>

        <form className="w-full max-w-2xl bg-white/60 backdrop-blur-sm p-6 rounded-md shadow-md mt-6" action="#" method="post">
            <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col">
                    <span className="font-medium mb-1">Name</span>
                    <input name="name" type="text" required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-1">Email</span>
                    <input name="email" type="email" required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-1">Phone Number</span>
                    <input name="phone" type="tel" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-1">Transportation to Island</span>
                    <select name="transport" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option>Public Plane</option>
                        <option>Private Plane</option>
                        <option>Cruise Ship</option>
                        <option>Not Needed</option>
                    </select>
                </label>

                <div className="grid grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="font-medium mb-1">Check-in Date</span>
                        <input name="checkin" type="date" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-medium mb-1">Check-out Date</span>
                        <input name="checkout" type="date" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </label>
                </div>

                <label className="flex flex-col">
                    <span className="font-medium mb-1">Place of Lodging</span>
                    <select name="lodging" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option>Resort</option>
                        <option>Hotel</option>
                        <option>Bed and Breakfast</option>
                        <option>Other</option>
                    </select>
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-1">Message</span>
                    <textarea name="message" rows={5} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </label>

                <div className="flex justify-center">
                    <button type="submit" className="bg-yellow-600 text-black px-6 py-2 rounded hover:bg-yellow-700">Submit</button>
                </div>
            </div>
        </form>

       </div>
    )
}