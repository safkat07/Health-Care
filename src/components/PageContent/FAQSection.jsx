import ContentWrapper from "@/ContentWrapper";
import SmallHeadingText from "../useableComponents/SmallHeadingText";
import HeadingText from "../useableComponents/HeadingText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqs = [
    {
        id: "faq-1",
        question: " What are your office hours?",
        answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        id: "faq-2",
        question: "How can I schedule an appointment?",
        answer: "You can schedule an appointment by visiting our website and using the appointment scheduling tool, or by contacting our customer service team."
    },
    {
        id: "faq-3",
        question: "Do you accept insurance?",
        answer: "Yes, we accept a variety of insurance plans. Please contact our office for a complete list of accepted providers."
    },
    {
        id: "faq-4",
        question: "What should I bring to my appointment?",
        answer: "Please bring a valid ID, your insurance card, a list of any medications you are currently taking, and any relevant medical records or referral letters."
    },
    {
        id: "faq-5",
        question: "Do you offer telemedicine appointments?",
        answer: "Yes, we offer telemedicine appointments to provide convenient and accessible healthcare. Through our telemedicine services, you can consult with our healthcare professionals from the comfort of your home. These virtual appointments are conducted using secure video conferencing technology, ensuring your privacy and confidentiality."
    }
];

const FAQSection = () => {
    return (
        <ContentWrapper className={"pb-28"}>
            <div className="flex justify-start items-start gap-y-5 flex-col">
                <SmallHeadingText className={""} smallTitle={"Faq"} />
                <HeadingText text={"Frequently Asked Questions"} />
            </div>
            <Accordion className="text-2xl primaryColor py-5" type="single" collapsible>
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </ContentWrapper>
    );
};

export default FAQSection;
