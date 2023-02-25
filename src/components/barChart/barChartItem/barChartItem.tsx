import "./barChartItemStyles.css"
import { RadioButton } from "../../inputFields/radioButton/radioButton"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { OfferProps } from "../../../app/offersPage/offersPageSlice"


interface Props {
    offerData: OfferProps
    itIsProfitable?: boolean
}

export const BarChartItem = ({ offerData, itIsProfitable }: Props) => {

    const { name, minimumPayment, maximumPayment, freeLimit, storageCost, transferCost, icon } = offerData

    const checkingForTabletResolution = () => window.matchMedia("(max-width: 768px)").matches


    const storageVolume = useSelector((state: RootState) => state.offers.storageVolume)
    const transferVolume = useSelector((state: RootState) => state.offers.transferVolume)

    const [customCost, setCustomCost] = useState({ name: "", value: 0 })
    const [isTable, setIsTable] = useState(false)

    const checkFreeLimit = (currentVolume: number) => {
        if (freeLimit) {
            return freeLimit >= currentVolume ? 0 : currentVolume - freeLimit
        } else {
            return currentVolume
        }
    }
console.log(customCost);
    const priceWithoutLimits: number = checkFreeLimit(+storageVolume) * customCost.value + checkFreeLimit(+transferVolume) * transferCost

    const finalOffer = () => {
        if (minimumPayment && minimumPayment > priceWithoutLimits) {
            return minimumPayment
        }
        else if (
            maximumPayment && maximumPayment < priceWithoutLimits
        ) {
            return maximumPayment
        }
        else {
            return priceWithoutLimits
        }
    }
    // useEffect(() => {
    //     if
    //         (typeof storageCost === "number") { setCustomCost(storageCost) }
    // }, [])

    useEffect(() => {
        setIsTable(checkingForTabletResolution)
        if
            (typeof storageCost === "number") { setCustomCost({ name: "", value: storageCost }) }
        else {
            setCustomCost(storageCost[0])
        }
    }, [])

    window.addEventListener('resize', function () {
        setTimeout(function () {
            setIsTable(checkingForTabletResolution)
        }, 200)
    })

    const specialGraphicsStyles = {
        desktop: {
            width: `${finalOffer() * 0.5}rem`,
            height: "4rem"
        },
        tablet: {
            height: `${finalOffer() * 0.5}rem`,
            width: "6rem"
        }
    }

    return (
        <div className="barChartItem">
            <div className="barChartItemLogoWrapper">
                <div className="barChartItemDescriptionWrapper">
                    <p className="barChartItemDescription">{name}</p>
                    {typeof storageCost === "object" &&
                        <form className="barChartItemOptions">
                            {storageCost.map((option: any, index) => <RadioButton key={index} name={name} label={option.name} cost={option.value} setValue={setCustomCost} checked={option.name===customCost.name!} />)}
                        </form>}
                </div>
                <img className="barChartItemIcon" src={icon} alt={name} />
            </div>
            <div className="barChartItemScaleWrapper">
                <div className={`barChartItemScale ${itIsProfitable && "minimalScale"}`} style={isTable ? specialGraphicsStyles.tablet : specialGraphicsStyles.desktop}></div>
                <p className="barChartItemScaleDescription"> {finalOffer()?.toFixed(2)}$ </p>
            </div>
        </div>
    )
}