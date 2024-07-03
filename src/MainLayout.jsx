import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import FAQSection from "./components/PageContent/FAQSection"
import Services from "./components/PageContent/Services"
import Testimonials from "./components/PageContent/Testimonials"
import WhoAreWe from "./components/PageContent/WhoAreWe"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <WhoAreWe />
            <Services />
            <Testimonials />
            <FAQSection />
        </>
    )
}

export default MainLayout