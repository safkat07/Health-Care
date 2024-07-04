import ContentWrapper from '../../ContentWrapper'
import pie from '../../assets/pie-chart.png'
import contact from '../../assets/contract.png'
import star from '../../assets/star.png'
import coin from '../../assets/coin.png'
import videoChat from '../../assets/video-chat.png'

import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'
import client4 from '../../assets/clientImg4.jpeg'


const ComprehensiveCare = () => {
    return (
        <ContentWrapper className={"py-16"}>
            <div className="size-full flex  justify-between items-end xl:gap-x-5 lg:gap-x-10">
                <div className=' w-fit shadow-md text-[#020043] shrink flex flex-col gap-y-5 p-3.5 rounded-3xl bg-[#FBFBFB]'>
                    <div>
                        <p className='text-5xl xl:w-auto lg:w-full  font-medium'>90%</p>
                        <p className='pt-2 xl:w-3/4'>Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <img className='w-3/4 m-auto' src={pie} alt="" />
                </div>
                <div className='flex flex-col w-full gap-y-10 justify-center items-center'>
                    <p className='text-5xl text-[#020043] xl:w-2/3  font-bold text-center mx-auto'>Comprehensive Care for Every Patient</p>
                    <div className="flex  justify-center items-end gap-x-5">
                        <div className="bg-[#f5f5f0] shadow-md flex-grow flex flex-col justify-end relative px-5 pt-14 pb-5 rounded-3xl">
                            <p className="text-5xl font-medium">500+</p>
                            <div className="flex gap-x-7">
                                <p className="">Board Certified Doctors</p>
                                <img className="w-1/3 right-0 top-20" src={contact} alt="Contact" />
                            </div>
                        </div>
                        <div className="border shadow-md  border-[#020043] flex-grow shrink-0 flex flex-col justify-end relative px-5 pt-5 pb-5 rounded-3xl">
                            <div className="flex gap-x-3.5 items-center">
                                <p className="text-5xl font-medium">4.8</p>
                                <img className="size-10 shrink-0" src={star} alt="Star" />
                            </div>
                            <p>Over 20,000 patients</p>
                            <div className="flex pt-5 -space-x-3">
                                <img className="size-10 inline-block object-cover rounded-full right-2 ring-slate-100" src={client1} alt="Client 1" />
                                <img className="size-10 inline-block object-cover rounded-full right-2 ring-slate-100" src={client2} alt="Client 2" />
                                <img className="size-10 inline-block object-cover rounded-full right-2 ring-slate-100" src={client3} alt="Client 3" />
                                <img className="size-10 inline-block object-cover rounded-full right-2 ring-slate-100" src={client4} alt="Client 4" />
                            </div>
                        </div>
                        <div className="bg-[#f5f5f0] shadow-md  flex-grow flex flex-col justify-end relative px-5 pt-14 pb-5 rounded-3xl">
                            <p className="text-5xl font-medium">$5000</p>
                            <div className="flex gap-x-7">
                                <p className="w-3/4">Money spend for poor patient</p>
                                <img className="w-1/3 right-0 top-20" src={coin} alt="Contact" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='shrink shadow-md  text-[#020043] p-3.5 rounded-3xl flex flex-col gap-y-10 bg-[#FBFBFB]'>
                    <div>
                        <p className='text-5xl font-medium'>50+</p>
                        <p className='pt-2 w-3/4'>Free lession video for patient</p>
                    </div>
                    <img className='w-3/4 m-auto' src={videoChat} alt="" />

                </div>
            </div>
        </ContentWrapper>
    )
}

export default ComprehensiveCare