import ImageCarousel from "../Components/ImageCarousel"
import IntroText from "../Components/IntroText"
import Card from "../Components/Card"

export default function Home() {
    return(
        <div className="flex flex-col">
         <ImageCarousel />

         <div>
              <IntroText
              title="Tahini"
              description="Tahini is a small tropical island known for its beautiful beaches, lush rainforests, and a small volcano that rises in the center. The island is home to friendly communities who rely on fishing and farming to make a living. Indigenous peoples have lived there for generations, keeping their traditions alive and caring for the land. With its warm climate and natural beauty, Tahini is a peaceful place where nature and culture come together.">
              </IntroText>
        </div>

        <h2 className="text-center font-bold my-3">Try these things: </h2>
        <div className="flex">
         
        </div>

        </div>
    
    )
}