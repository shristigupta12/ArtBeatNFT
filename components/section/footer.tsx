import { PageContent } from "../layout/page-content"
import { ViewContainer } from "../layout/view-container"
import { FooterIcons } from "@/utils/footer-icons"

export const Footer : React.FunctionComponent = () => {
    return (
        <footer className="bg-neutral-800 text-white p-7">
                <ViewContainer className="flex justify-between ">
                    <div className="stay-in-loop flex flex-col gap-3 text-lg font-semibold">
                        <div>Stay in the loop</div>
                        <div className="flex justify-between gap-2">
                            <input type="text" placeholder="Your email address" className="rounded-md bg-neutral-800 border-[1px] border-neutral-600 placeholder:text-sm px-2" />
                            <button className="bg-[#2081E2] rounded-md p-2">Sign up</button>
                        </div>
                    </div>
                    <div className="join-community flex flex-col gap-3 text-lg font-semibold">
                        <div>Join the community</div>
                        <div className="grid grid-cols-4 gap-2">
                            {FooterIcons.map((element, key)=>(
                                <div className="bg-neutral-700 rounded-xl w-[45px] h-[45px] flex justify-center items-center cursor-pointer hover:bg-[#2081E2] " key={key}>
                                    {element}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="need-help flex flex-col gap-3 text-lg font-semibold">
                        <div>Need help?</div>
                        <button className="bg-[#2081E2]  rounded-md p-2">Contact Support</button>
                    </div>
                </ViewContainer>
        </footer>
        
    )
}