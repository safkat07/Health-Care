import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import ComprehensiveCare from "./components/Header/ComprehensiveCare"
import Navbar from "./components/Header/Navbar"
import FAQSection from "./components/PageContent/FAQSection"
import FirstAppointment from "./components/PageContent/FirstAppointment"
import Services from "./components/PageContent/Services"
import Testimonials from "./components/PageContent/Testimonials"
import WhoAreWe from "./components/PageContent/WhoAreWe"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ComprehensiveCare />
            {/* <WhoAreWe />
            <Services />
            <Testimonials />
            <FAQSection />
            <FirstAppointment />
            <Footer /> */}
        </>
    )
}

export default MainLayout