import IntroText from "../Components/IntroText"

export default function FAQ() {
    return(
        <div>
            <IntroText
            title="FAQ"
            description="Here’s a list of Frequently Asked Questions:"/>

            <h2 className="text-center font-bold">What kind of outlets does Tahini use?</h2>
            <p className="text-center my-2">Power outlets are 120 volts (the same as in the United States).</p>
            <h2 className="text-center font-bold">What are the alcohol laws?</h2>
            <p className="text-center my-2">Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. The drinking age is 18 years old.</p>
            <h2 className="text-center font-bold">What language do Tahinians speak?</h2>
            <p className="text-center my-2">Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.</p>
            <h2 className="text-center font-bold">What if I get hurt on vacation?</h2>
            <p className="text-center my-2">There is one hospital and several clinics. The hospital has many multilingual employees.</p>
            <h2 className="text-center font-bold">Is Tahini safe?</h2>
            <p className="text-center my-2">Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</p>
            <h2 className="text-center font-bold">Are there any holidays I should be aware of?</h2>
            <p className="text-center my-2">Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.</p>
            <h2 className="text-center font-bold">What currency is used in Tahini?</h2>
            <p className="text-center my-2">Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.</p>
        </div>
    )
}