import { cn } from "@/lib/utils"
import { GoArrowUpRight } from "react-icons/go";


const Button = ({ btnText, className }) => {
    return (
        <button className={cn("text-black text-center flex  items-center rounded-2xl border border-black", className)}>
            {btnText} <span className="text-3xl"> <GoArrowUpRight /></span>
        </button>
    )
}

export default Button