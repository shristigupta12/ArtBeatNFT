import React from "react"
import { PageContent } from "../layout/page-content"
import { ViewContainer } from "../layout/view-container"
import { NotableCollectionsCard } from "../ui/notable-collections-card"



const NotableCollections: React.FunctionComponent = () => {

    const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return(
        <PageContent>
            <ViewContainer className="flex flex-col gap-4">
                <div className="heading text-white text-xl font-bold">Notable Collections</div>
                <div className="flex w-[100vw] overflow-y-hidden overflow-x-scroll">
                <div className={`flex gap-3`}>
                    {mockData.map((index, key)=>(
                        <NotableCollectionsCard key={key} />
                    ))}
                    </div>
                </div>
                
            </ViewContainer>
        </PageContent>
    )
}

export {NotableCollections}