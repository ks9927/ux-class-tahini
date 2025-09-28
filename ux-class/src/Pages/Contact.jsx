import IntroText from "../Components/IntroText"

export default function Contact() {
    return(
        <div className="flex flex-col items-center px-4 py-8">
            <IntroText 
            title="Contact Us"
            description="Have any questions? Concerns? Feel free to contact us at 123-456-7890 or use the form below"/>

            <form className="w-full max-w-xl bg-white/60 backdrop-blur-sm p-6 rounded-md shadow-md mt-6" action="#" method="post">
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
                        <span className="font-medium mb-1">Message</span>
                        <textarea name="message" rows="5" required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </label>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-yellow-600 text-black px-6 py-2 rounded hover:bg-yellow-700">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}