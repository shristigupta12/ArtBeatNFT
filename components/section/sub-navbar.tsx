import { UseSubNavCategory } from "@/app/page"


export const SubNavbar: React.FunctionComponent = () => {

    const { category, setCategory } = UseSubNavCategory();
    function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        setCategory(e.currentTarget.textContent || ""); 
    }

    return( 
    <nav className="flex text-neutral-100  items-center justify-between py-3 px-5 md:px-32">
        <ul className="flex justify-center items-center text-neutral-100 gap-5 md:gap-20 ">
            <li className={`cursor-pointer hover:text-[#166AE3] ${category === 'Art' ? 'text-[#166AE3]' : ''}`} onClick={handleClick}>Art</li>
            <li className={`cursor-pointer hover:text-[#166AE3]  ${category === 'Music' ? 'text-[#166AE3]' : ''}`} onClick={handleClick}>Music</li>
            <li className={`cursor-pointer hover:text-[#166AE3]  ${category === 'PFPs' ? 'text-[#166AE3]' : ''}`} onClick={handleClick}>PFPs</li>
        </ul>
    </nav> 
    )
}
