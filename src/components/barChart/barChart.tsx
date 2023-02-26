import { useSelector } from "react-redux"
import { BarChartItem } from "./barChartItem/barChartItem"
import { RootState } from "../../app/store"
import "./barChartStyles.css"

export const BarChart = () => {
    
    const offers = useSelector ((state:RootState)=>state.offers.offersData)

    return (
        <div className="barChart">
            {offers.map((offer, index: number) => <BarChartItem key={index} offerData={offer}/>)}
        </div>
    )
} 