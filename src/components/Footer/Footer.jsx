import ContentWrapper from "@/ContentWrapper";
import logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const navLinks1 = [
    { href: "#", text: "Home" },
    { href: "#", text: "About us" },
    { href: "#", text: "Success Page" },
    { href: "#", text: "Terms And Conditions" },
];

const navLinks2 = [
    { href: "#", text: "Services" },
    { href: "#", text: "Scheduling" },
    { href: "#", text: "Contact Us" },
    { href: "#", text: "Patient Portal" },
];

const socialIcons = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedin, label: "LinkedIn" },
    { icon: FaYoutube, label: "YouTube" },
];

const Footer = () => (
    <footer className="h-full py-28 text-white bg-[#020043]">
        <ContentWrapper className={"flex justify-between items-end"}>
            <div className="text-xl">
                <img src={logo} alt="Logo" />
                <p className="py-5">
                    123 Main Street Anytown, USA <br />Postal Code: 12345
                </p>
                <p>Support: support@oyolloo.com</p>
                <p>(Available: 10:00am to 7.00pm)</p>
            </div>
            <div className="flex flex-col text-lg h-full justify-between gap-y-2">
                {navLinks1.map(({ href, text }, index) => (
                    <a key={index} href={href}>{text}</a>
                ))}
            </div>
            <div className="flex flex-col text-lg h-full justify-between gap-y-2">
                {navLinks2.map(({ href, text }, index) => (
                    <a key={index} href={href}>{text}</a>
                ))}
            </div>
            <div>
                <p>Follow Us</p>
                <div className="flex gap-x-5 pt-2.5 items-center">
                    {socialIcons.map(({ icon: Icon, label }, index) => (
                        <Icon key={index} className="text-2xl cursor-pointer" aria-label={label} />
                    ))}
                </div>
                <p className="pt-10">@Docplus 2024</p>
            </div>
        </ContentWrapper>
    </footer>
);

export default Footer;
