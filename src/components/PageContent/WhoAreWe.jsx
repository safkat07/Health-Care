import ContentWrapper from "@/ContentWrapper"
import SmallHeadingText from "../useableComponents/SmallHeadingText"
import HeadingText from "../useableComponents/HeadingText"
import img from '../../assets/whoarewe.png'
import Button from "../useableComponents/Button"
import PragraphText from "../useableComponents/PragraphText"
const WhoAreWe = () => {
    return (
        <ContentWrapper className={"py-28"}>
            <div className="flex  w-full  ">
                <div className="flex-1 flex gap-y-7 flex-col justify-normal items-start">
                    <SmallHeadingText className={""} smallTitle={"Who are we"} />
                    <HeadingText className={""} text={"We Help to Get Solution"} />
                    <PragraphText pragraphText={" We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve."} />
                    <Button className={" px-5   py-2 bg-yellow-300 border-none font-medium "} btnText={"Learn More"} />
                </div>
                <div className="flex-1 w-full ">
                    <div className="relative">
                        <img className="w-fit mx-auto" src={img} alt="" />
                        <div className="w-1/2 h-[40%] bg-[#343268] p-5 text-white rounded-3xl absolute top-[70%] -left-20">
                            <p className="text-2xl font-medium">Our mission is simple</p>
                            <p className="py-2.5 text-neutral-300">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default WhoAreWe