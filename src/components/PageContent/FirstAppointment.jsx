import ContentWrapper from '@/ContentWrapper'
import imgSrc from '../../assets/firstAppointment.png'
import Button from '../useableComponents/Button'
import logo from '../../assets/logo.png'
const FirstAppointment = () => {
    return (
        <ContentWrapper className={"pb-28"}>

            <div className="relative  text-white overflow-hidden">
                <img className='w-full h-full  rounded-3xl mx-auto' src={imgSrc} alt="" />
                <div className="absolute flex flex-col z-[80] gap-y-5 justify-center px-16 inset-0 rounded-3xl bg-gradient-to-r from-[#0B0949] to-indigo-500/50   ">
                    <p className='text-5xl font-medium leading-snug'>Get Your <br /> First Appointment <br /> At 50% Off!</p>
                    <div className='flex gap-5  items-center'>
                        <Button className={" px-5   py-2 bg-yellow-300 border-none font-medium "} btnText={"Appointment"} />
                        <Button className={" px-5   py-2  border-white text-white font-medium "} btnText={"Learn More"} />
                    </div>
                    <div className='absolute top-20 right-20'>
                        <img src={logo} alt="" />
                    </div>
                </div>

            </div>
        </ContentWrapper>
    )
}

export default FirstAppointment