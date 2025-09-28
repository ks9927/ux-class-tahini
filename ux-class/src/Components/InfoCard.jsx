
export default function InfoCard({title, image, description, alt}) {
    return(
        <div className="flex gap-2">
            <div className="w-2xs m-5">
                 <img src={image} alt={alt} />
            </div>

            <div>
            <h2 className="text-2xl font-bold mt-5 mb-3">{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    )
}