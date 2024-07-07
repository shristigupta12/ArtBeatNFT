import { UseSubNavCategory } from "@/app/page"


export const SubNavbar: React.FunctionComponent = () => {

    const { category, setCategory } = UseSubNavCategory();
    function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        setCategory(e.currentTarget.textContent || ""); 
    }

    return( 
    <nav className="flex text-neutral-100 shadow-lg shadow-neutral-800 items-center py-10 h-[90vh]  justify-between px-4">
        <ul className="flex flex-col justify-center items-center text-neutral-100 gap-5 md:gap-20 ">
            <li className={`cursor-pointer hover:text-orange-400 ${category === 'Art' ? 'text-orange-400' : ''}`} onClick={handleClick}>Art</li>
            <li className={`cursor-pointer hover:text-orange-400  ${category === 'Music' ? 'text-orange-400' : ''}`} onClick={handleClick}>Music</li>
            <li className={`cursor-pointer hover:text-orange-400  ${category === 'PFPs' ? 'text-orange-400' : ''}`} onClick={handleClick}>PFPs</li>
        </ul>
    </nav> 
    )
}
