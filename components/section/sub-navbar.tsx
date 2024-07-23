import { UseSubNavCategory } from "@/app/page"


export const SubNavbar: React.FunctionComponent = () => {

    const { category, setCategory } = UseSubNavCategory();
    function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        setCategory(e.currentTarget.textContent || ""); 
    }

    return( 
    <nav className="flex text-neutral-100  items-center justify-between py-3 px-3 md:px-10">
        <ul className="flex justify-center items-center text-neutral-100 gap-5 md:gap-9 ">
            <li className={`cursor-pointer hover:bg-gray-700 py-2 px-3 hover:rounded-xl hover:opacity-50 ${category === 'Art' ? 'bg-gray-700 p-3 rounded-xl opacity-50' : ''}`} onClick={handleClick}>Art</li>
            <li className={`cursor-pointer hover:bg-gray-700 py-2 px-3 hover:rounded-xl hover:opacity-50  ${category === 'Music' ? 'bg-gray-700 p-3 rounded-xl opacity-50' : ''}`} onClick={handleClick}>Music</li>
            <li className={`cursor-pointer hover:bg-gray-700 py-2 px-3 hover:rounded-xl hover:opacity-50  ${category === 'PFPs' ? 'bg-gray-700 p-3 rounded-xl opacity-50' : ''}`} onClick={handleClick}>PFPs</li>
        </ul>
    </nav> 
    )
}
