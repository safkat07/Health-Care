import ContentWrapper from "@/ContentWrapper"
import SmallHeadingText from "../useableComponents/SmallHeadingText"
import HeadingText from "../useableComponents/HeadingText"
import PragraphText from "../useableComponents/PragraphText"
import Button from "../useableComponents/Button"
import img1 from '../../assets/service1.png'
import img2 from '../../assets/service2.png'
import img3 from '../../assets/service3.png'
import { GoArrowUpRight } from "react-icons/go";

const DisplayImage = ({ imgSrc, title, desc }) => {
    return (
        <div className="w-full cursor-pointer mx-auto">
            <div className="relative">
                <img className="w-full mx-auto rounded-3xl" src={imgSrc} alt="" />
                <div className="absolute left-10 p-5  text-white w-[300px] xl:h-[38%] xl:top-[60%] top-28  bg-[#343268] bg-opacity-90 rounded-3xl">
                    <p className="text-2xl text-nowrap font-medium">
                        {title}
                    </p>
                    <div className=" flex items-end">
                        <p className="pt-2.5">
                            {desc}
                        </p>
                        <span className="text-3xl bg-yellow-300 p-2.5 rounded-full"><GoArrowUpRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Services = () => {
    return (
        <ContentWrapper className={"bg-[#FFFFF5] rounded-3xl min-h-screen "}>
            <div className="grid gap-10 w-full lg:grid-cols-2 grid-cols-1 py-10 ">
                <div className="flex items-start flex-col gap-y-7">
                    <SmallHeadingText smallTitle={"Service"} />
                    <HeadingText text={"Empowering Health, Enriching Lives"} />
                    <PragraphText pragraphText={"We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness."} />
                    <Button className={" px-5   py-2 bg-yellow-300 border-none font-medium "} btnText={"Apointment"} />
                </div>
                <DisplayImage imgSrc={img1} title={"Advanced Technology"} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} />
                <DisplayImage imgSrc={img2} title={"Online Doctor Meet"} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} />
                <DisplayImage imgSrc={img3} title={'Consultancy your health'} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} />

            </div>
        </ContentWrapper>
    )
}

export default Services