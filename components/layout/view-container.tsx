import { cn } from "@/lib/utils"

export const ViewContainer : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}:any) => {
    return(
        <div className={cn('box-border mx-auto w-[98vw] px-9', className)} {...props}>{children}</div>
    )
}


 