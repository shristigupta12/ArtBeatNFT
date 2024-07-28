import { PageContent } from "../layout/page-content"
import { ViewContainer } from "../layout/view-container"
import { ChartColumn } from "../ui/chart-column"


export const Charts : React.FunctionComponent = () => {


    const chartDataCol1 = [
        { rank: 1,  image: "img1", name: "name1",  floorPrice: 'floorPrice1',  volume: 'volume1' },
        { rank: 2, image: "img2",  name: "name1", floorPrice: 'floorPrice2', volume: 'volume2' },
        { rank: 3, image: "img3",  name: "name3", floorPrice: 'floorPrice3', volume: 'volume3' },
        { rank: 4, image: "img4",  name: "name4", floorPrice: 'floorPrice4', volume: 'volume4' },
        { rank: 5, image: "img5",  name: "name5", floorPrice: 'floorPrice5', volume: 'volume5' }
    ]

    const chartDataCol2 = [
        { rank: 6,  image: "img6", name: "name6",  floorPrice: 'floorPrice6',  volume: 'volume6' },
        { rank: 7, image: "img7",  name: "name7", floorPrice: 'floorPrice7', volume: 'volume7' },
        { rank: 8, image: "img8",  name: "name8", floorPrice: 'floorPrice8', volume: 'volume8' },
        { rank: 9, image: "img9",  name: "name9", floorPrice: 'floorPrice9', volume: 'volume9' },
        { rank: 10, image: "img10",  name: "name10", floorPrice: 'floorPrice10', volume: 'volume10' }
    ]


    return(
        <PageContent>
        <ViewContainer className="charts-wrapper text-white flex flex-col  gap-5">
            <div className="filters flex w-full justify-between">
                <div className="trending-top flex bg-neutral-800 rounded-xl py-2 px-3 gap-3">
                    <div>Trending</div>
                    <div>Top</div>
                </div>  

                <div className="flex gap-4">
                    <div className="time flex bg-neutral-800 rounded-xl py-2 px-3 gap-3">
                        <div>1h</div>
                        <div>6h</div>
                        <div>24h</div>
                        <div>7d</div>
                    </div>
                    <div className="chains bg-neutral-800 rounded-xl py-2 px-3">All chains</div>
                    <div className="view-all bg-neutral-800 rounded-xl py-2 px-3">View all</div>
                </div>
            </div>
            <div className="flex justify-between gap-20 ">
                <ChartColumn col={chartDataCol1} />
                <ChartColumn col={chartDataCol2} />
            </div>
        </ViewContainer>
        </PageContent>
    )
}