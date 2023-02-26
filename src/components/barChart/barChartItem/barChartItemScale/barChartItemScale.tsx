import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

interface Props {
    isTable: boolean,
    finalPrice: number,
    companyName: string
}

export const BarChartItemScale = ({ isTable, finalPrice, companyName }: Props) => {
    const allFinalPrices = useSelector((state: RootState) => state.offers.finalPrices)

    const itIsProfitable = () => {
        const minPrice = Object.entries(allFinalPrices)
            .reduce((acc: [string, number], item: [string, number]) => {
                if (acc[0] === "") {
                    return acc = item
                } else
                    if (acc[1] > item[1]) { return acc = item }
                    else { return acc }
            }, ["", 0])
        return minPrice[0]
    }

    const specialGraphicsStyles = {
        desktop: {
            width: `${finalPrice * 0.5}rem`,
            height: "4rem"
        },
        tablet: {
            height: `${finalPrice * 0.5}rem`,
            width: "6rem"
        }
    }

    return (
        <div className="barChartItemScaleWrapper">
            <div
                className={`barChartItemScale ${itIsProfitable() === companyName && "minimalScale"}`}
                style={isTable ? specialGraphicsStyles.tablet : specialGraphicsStyles.desktop}>
            </div>
            <p className="barChartItemScaleDescription"> {finalPrice}$ </p>
        </div>
    )
}