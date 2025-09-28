import ImageCarousel from "../Components/ImageCarousel"
import IntroText from "../Components/IntroText"
import Card from "../Components/Card"   
import ReefImg from "../assets/hiroko-yoshii-reef-unsplash.jpg"
import ShrimpImg from "../assets/orkun-orcan-shrimp-unsplash.jpg"
import VolcanoImg from "../assets/spenser-sembrat-volcano-unsplash.jpg"
import RainforestImg from "../assets/nejc-sinkovec-rainforest-unsplash.jpg"

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

        <h2 className="text-center font-bold my-3 text-2xl">Try these things: </h2>
        <div className="flex bg-gray-200 p-4">
         <Card
         image={ReefImg}
         alt="photo of orange fish in reef"
         title="Go to the beach"
         description="Try snorkelling in our oceans" />

         <Card
         image={ShrimpImg}
         alt="photo of shrimp dish"
         title="Go to our restaurants"
         description="Try our Pan-Asian cuisine" />

         <Card
         image={VolcanoImg}
         alt="photo of volcano in distance"
         title="Visit our volcano"
         description="Come see our active small volcano" />

         <Card
         image={RainforestImg}
         alt="photo of waterfall in rainforest"
         title="Visit our tropical rainforest"
         description="Come take a hike and see our scenic views" />
        </div>

        </div>
    
    )
}