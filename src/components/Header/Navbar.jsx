import ContentWrapper from '@/ContentWrapper'
import logo from '../../assets/logo_light.png'
import Button from '../useableComponents/Button'

const Navbar = () => {
    const navLinks = (
        <>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">About us</a>
        </>
    )
    return (
        <nav className='sticky z-[99] sm:py-5 py-2.5 bg-white/20 backdrop-blur-lg inset-x-0 top-0'>
            <ContentWrapper className={" flex items-center justify-between"}>
                <div className='cursor-pointer'>
                    <img src={logo} alt="" />
                </div>
                <div className='lg:flex hidden font-medium  gap-x-5 text-xl'>
                    {navLinks}
                </div>
                <div className='lg:block hidden'>
                    <Button className={"text-xl px-5 py-3   font-medium"} btnText={"Appointment"} />
                </div>
                <div className='lg:hidden block '>
                    Menu
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar