import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ContentWrapper from "@/ContentWrapper";
import SmallHeadingText from "../useableComponents/SmallHeadingText";
import HeadingText from "../useableComponents/HeadingText";
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import clientImg1 from '../../assets/client1.jpg'
import clientImg2 from '../../assets/client2.jpg'
import clientImg3 from '../../assets/client3.jpg'
import clientImg4 from '../../assets/clientImg4.jpeg'
import clientImg5 from '../../assets/clientImg5.jpeg'
import clientImg6 from '../../assets/clientImg6.webp'
const testimonials = [
    {
        name: 'Sarah D',
        profession: 'IT Professional',
        heading: 'Expertise and Compassion Combined',
        text: 'I can’t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.',
        rating: 5,
        image: clientImg1
    },
    {
        name: 'Michael R',
        profession: 'Business Executive',
        heading: 'Life-Saving Care, Life-Changing Experience',
        text: 'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
        rating: 5,
        image: clientImg2
    },
    {
        name: 'David S',
        profession: 'Lawyer',
        heading: 'A Partner in Health and Wellness',
        text: "As a busy professional, I appreciate the convenience and quality of care I receive at DOC+. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
        rating: 5,
        image: clientImg3
    },
    {
        name: 'Emily J',
        profession: 'Teacher',
        heading: 'Patient-Centered Care Approach Always',
        text: "The doctors and staff truly listen to their patients. I felt heard and understood, and they provided a personalized treatment plan that made a real difference in my health.",
        rating: 5,
        image: clientImg4
    },
    {
        name: 'James T',
        profession: 'Engineer',
        heading: 'Outstanding Medical Team and Support',
        text: "The medical team at [Healthcare Provider Name] is outstanding. Their expertise and dedication to patient care are evident in every interaction. I highly recommend their services.",
        rating: 5,
        image: clientImg5
    },
    {
        name: 'Olivia M',
        profession: 'Graphic Designer',
        heading: 'Compassionate Care Every Single Day',
        text: "The compassionate care I received was beyond my expectations. The doctors and nurses were attentive and genuinely cared about my well-being. It made all the difference in my recovery.",
        rating: 5,
        image: clientImg6
    },

];


const Testimonials = () => {
    return (
        <ContentWrapper className="py-28">
            <div className="flex flex-col items-start gap-y-5">
                <SmallHeadingText smallTitle="Testimonial" />
                <HeadingText text="What they say about us" />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true, dynamicBullets: true }}

                modules={[Pagination]}
                className="mt-8 pb-20"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} >
                        <div className="bg-[#FFFFF5] rounded-lg gap-y-5 px-10 py-6 h-full text-start flex justify-between flex-col">
                            <p className="text-2xl text-ellipsis w-3/4 font-medium text-left" >{testimonial.heading}</p>
                            <p className="leading-snug line-clamp-4">{testimonial.text}</p>

                            <div className='flex justify-start gap-x-2 items-center'>
                                <img src={testimonial.image} alt={testimonial.name} className="rounded-full size-12 object-cover " />
                                <div>
                                    <div className='flex   items-center'>
                                        <h3 className="leading-none text-sm font-semibold">{testimonial.name}</h3>,
                                        <span className='text-sm leading-none ml-1 '>{testimonial.profession}</span>
                                    </div>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={testimonial.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContentWrapper>
    );
};

export default Testimonials;
