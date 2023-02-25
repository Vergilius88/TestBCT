import "./barChartStyles.css"
import { BarChartItem } from "./barChartItem/barChartItem"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"


const itIsProfitable = false;


export const BarChart = () => {
    const offers = useSelector ((state:RootState)=>state.offers.offersData)

    return (
        <div className="barChart">
            {offers.map((offer, index: number) => <BarChartItem key={index} offerData={offer} itIsProfitable={itIsProfitable}/>)}
        </div>
    )
} 