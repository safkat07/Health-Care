import { cn } from "@/lib/utils"

const HeadingText = ({ text, className }) => {
    return (
        <span className={cn("text-4xl xl:w-1/2  primaryColor font-medium leading-normal text-black text-left", className)}>
            {text}
        </span>
    )
}

export default HeadingText