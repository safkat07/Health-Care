import ContentWrapper from '../../ContentWrapper'
import pie from '../../assets/pie-chart.png'
const ComprehensiveCare = () => {
    return (
        <ContentWrapper className={"pb-20"}>
            <div className="size-full flex flex-row justify-between items-end gap-x-5">
                <div className='w-60 py text-[#020043] p-3.5 rounded-3xl bg-[#FBFBFB]'>
                    <p className='text-5xl font-medium'>90%</p>
                    <p className='pt-2 w-3/4'>Patient satisfaction rate, reflecting our commitment.</p>
                    <img src={pie} alt="" />
                </div>
                <div className='flex flex-col gap-y-10 justify-center items-center'>
                    <p className='text-5xl text-[#020043] w-[60%] font-bold text-center mx-auto'>Comprehensive Care for Every Patient</p>
                    <div className='flex justify-center items-center gap-x-3'>
                        <div className='bg-[#f5f5f0] size-44 rounded-3xl'>

                        </div>
                        <div className='bg-[#f5f5f0] size-44 rounded-3xl'>

                        </div>
                        <div className='bg-[#f5f5f0] size-44 rounded-3xl'>

                        </div>
                    </div>
                </div>
                <div className='w-60 py text-[#020043] p-3.5 rounded-3xl bg-[#FBFBFB]'>
                    <p className='text-5xl font-medium'>90%</p>
                    <p className='pt-2 w-3/4'>Patient satisfaction rate, reflecting our commitment.</p>
                    <img src={pie} alt="" />
                </div>
            </div>
        </ContentWrapper>
    )
}

export default ComprehensiveCare