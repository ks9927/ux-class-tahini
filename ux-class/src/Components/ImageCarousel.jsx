import BeachHeader from '../assets/sean-oulashin-beach-unsplash.jpg'

export default function ImageCarousel() {
    return(
        <div className="overflow-hidden w-3xl self-center 
        mx-5 my-7 rounded-2xl">
            <img src={BeachHeader} alt="photo of beach at sunset" />
        </div>
    )
}
