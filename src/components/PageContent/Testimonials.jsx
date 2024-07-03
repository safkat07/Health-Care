import ContentWrapper from "@/ContentWrapper"
import SmallHeadingText from "../useableComponents/SmallHeadingText"
import HeadingText from "../useableComponents/HeadingText"

const Testimonials = () => {
    return (
        <ContentWrapper className={"py-28"}>
            <div className="flex justify-start items-start flex-col gap-y-5">
                <SmallHeadingText smallTitle={"Testimonial"} />
                <HeadingText text={"What they say about us"} />
            </div>
        </ContentWrapper>
    )
}

export default Testimonials