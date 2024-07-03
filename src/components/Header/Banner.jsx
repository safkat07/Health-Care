import ContentWrapper from "@/ContentWrapper"
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <ContentWrapper className="py-5 relative">
            <div className="relative overflow-hidden">
                <img src={bannerImg} className="mx-auto w-full h-full" alt="Banner" />
                <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-b from-white/5 to-blue-950/40  pointer-events-none"></div>
            </div>
        </ContentWrapper>
    )
}

export default Banner
