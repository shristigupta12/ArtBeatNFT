import { cn } from "@/lib/utils"

interface ViewContainerProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // To accept any additional props
}

export const ViewContainer : React.FunctionComponent<ViewContainerProps> = ({children, className, ...props}:any) => {
    return(
        <div className={cn('box-border mx-auto',
          'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',)} {...props}>{children}</div>
    )
}