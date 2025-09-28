
export default function IntroText({ title, description }) {
    return(
        <div className="text-center m-5">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mx-28">{description}</p>
        </div>
    )
}