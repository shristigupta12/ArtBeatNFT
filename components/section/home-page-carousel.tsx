import { useState } from "react";
import { ViewContainer } from "../layout/view-container"
import { Carousel } from "../ui/homeCarousel"
import { useNavCategory } from "@/app/page";

export const CarouselSection : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () => {
    let {category, setCategory} = useNavCategory();

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction:string)=>{
        if(direction=="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 3)
        }else{
            setSlideIndex(slideIndex<4 ? slideIndex+1 : 0)
        }
    }

    return(
        <section> 
            <ViewContainer className=" w-full text-white flex justify-between relative items-start overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left-filled cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" onClick={()=>handleClick("left")}/>
                </svg>

                <Carousel/>

                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-filled cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" onClick={()=>handleClick("right")}/>
                </svg>
           
            </ViewContainer>
        </section>
    )
}