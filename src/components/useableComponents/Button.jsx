import { cn } from "@/lib/utils"
import { GoArrowUpRight } from "react-icons/go";


const Button = ({ btnText, className }) => {
    return (
        <button className={cn("text-black text-center flex primaryColor items-center rounded-2xl border border-[#020043]", className)}>
            {btnText} <span className="text-3xl"> <GoArrowUpRight /></span>
        </button>
    )
}

export default Button