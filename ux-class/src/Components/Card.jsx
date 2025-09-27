
export default function Card({image, title, description}) {
    return (
        <div>
            <div className="bg-gray-300">
                {img}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}