import InfoCard from "../Components/InfoCard"
import IntroText from "../Components/IntroText"
import BoatImg from '../assets/aakash-goel-boat-tour-unsplash.jpg'
import ForestImg from '../assets/yu-jisue-forest-hike-unsplash.jpg'
import HelicopterImg from '../assets/jakob-owens-helicopter-unsplash.jpg'
import FoodImg from '../assets/boris-izmaylov-cusine-unsplash.jpg'

export default function Experiences() {
    return(
        <div>
            <IntroText
            title="Experiences"
            description="Taniti Island is full of fun and adventure. Visitors enjoy beaches, rainforests, and the volcano, plus activities like snorkeling, zip-lining, fishing, and nightlife in Merriton Landing. Taniti City offers native architecture and beautiful white-sand beaches around Yellow Leaf Bay." />

            <InfoCard
            title="Go to the beach"
            description="At the beach, visitors can dive into adventure with snorkeling in crystal-clear waters, join scenic boat tours around the island, or simply relax on the soft white sand. Many enjoy chartered fishing trips, swimming, or soaking up the sun while watching the waves. With options for both excitement and relaxation, the beach is a perfect spot for everyone."
            image={BoatImg}
            alt="photo of people on boat tour"/>

            <InfoCard
            title="Enjoy the rainforest"
            description="In the rainforest, you can hike along scenic trails, zip-line through the treetops, and explore the lush, green landscape full of wildlife and plants. It’s a great place for adventure and discovering nature up close."
            image={ForestImg}
            alt="walking trail through forest"/>

            <InfoCard
            title="Other Activites"
            description="Beyond the beach and rainforest, visitors can explore Taniti’s active volcano, learn local history at museums, take thrilling helicopter rides, enjoy chartered fishing tours, visit art galleries, or relax at pubs and dance clubs. There’s something for everyone to enjoy."
            image={HelicopterImg}
            alt="photo of someone on helicopter ride"/>

            <InfoCard
            title="Enjoy our delicious cusine"
            description="Taniti Island offers a tasty mix of local and international flavors. Many restaurants serve fresh local fish, rice dishes, and a variety of Pan-Asian cuisine. Whether you’re looking for casual beachside bites or sit-down meals, there’s something delicious for everyone to enjoy."
            image={FoodImg}
            alt="photo of steamed buns in basket"/>
        </div>
    )
}