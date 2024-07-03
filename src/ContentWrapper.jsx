import { cn } from "./lib/utils"

const ContentWrapper = ({ className, children }) => {
    return (
        <div className={cn("h-full mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default ContentWrapper