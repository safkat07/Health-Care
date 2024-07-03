import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import Services from "./components/PageContent/Services"
import WhoAreWe from "./components/PageContent/WhoAreWe"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <WhoAreWe />
            <Services />
        </>
    )
}

export default MainLayout