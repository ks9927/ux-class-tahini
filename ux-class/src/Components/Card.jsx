
export default function Card({image, title, description, alt}) {
    return (
        <div className="border-2 border-black border-solid bg-gray-50 
        rounded-xl p-5">
            <div className="bg-blue-300 w-3xs m-auto my-2.5 rounded-xl">
                <img src={image} alt={alt} />
            </div>
            <h3 className="font-bold text-center">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    )
}