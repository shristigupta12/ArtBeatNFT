import { cn } from "@/lib/utils"

export const PageContent : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({className, children, ...props}) => {
    return(
        <div className= {cn('page-content my-10', className)}>
            {children}
        </div>
    )
}