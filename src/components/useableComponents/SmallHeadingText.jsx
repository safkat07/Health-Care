import { cn } from '@/lib/utils'

const SmallHeadingText = ({ className, smallTitle }) => {
    return (
        <span className={cn("font-medium  px-5 py-1.5 rounded-full  border border-black text-left text-black", className)}>
            {smallTitle}
        </span>
    )
}

export default SmallHeadingText