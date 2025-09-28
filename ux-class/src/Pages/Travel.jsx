import IntroText from "../Components/IntroText"
import InfoCard from "../Components/InfoCard"
import CruiseShip from '../assets/damon-on-road-cruise-unsplash.jpg'
import ResortImg from '../assets/christian-lambert-resort-unsplash.jpg'
import TaxiImage from '../assets/rupinder-singh-taxi-unsplash.jpg'
import MarketImg from '../assets/jacky-watt-market-unsplash.jpg'

export default function Travel() {
    return(
        <div>
        <IntroText
        title="Travel Planning"
        description="Here’s where you can see how to get to the island, where to stay, how to get around the island and more!"/>


        <InfoCard
        image={CruiseShip}
        alt="image of cruise ship docking at beach"
        title="How to get there"
        description="You can reach the island by public plane, private jet, or cruise ship. Most visitors fly in, but there's a small airport for private planes, and a cruise ship docks once a week."/>

        <InfoCard
        title="Where to stay"
        description="The island offers a range of places to stay, from cozy family-run inns and charming bed and breakfasts to standard hotels. For those looking to splurge, there’s even a four-star resort with all the upscale amenities."
        image={ResortImg}
        alt="photo of resort"/>

        <InfoCard
        title="How to get around"
        description="Getting around the island is easy and flexible. Public buses run regularly, private shuttles offer more comfort, and taxis are available if you need a quick ride. Of course, you can always explore on foot—sometimes the best way to see the island is the old-fashioned way."
        image={TaxiImage}
        alt="image of a yellow taxi"/>

        <InfoCard
        title="Forgot something?"
        description="The island has plenty of places to grab essentials—two grocery stores, two supermarkets, and a 24/7 convenience store for anything you need, anytime."
        image={MarketImg}
        alt="photo of fruit market outside"/>

        </div>
    )
}