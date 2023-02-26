import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RadioButton } from "../../inputFields/radioButton/radioButton"
import { RootState } from "../../../app/store"
import { OfferProps, setFinalPrices } from "../../../app/offersPage/offersPageSlice"
import { useAppDispatch } from "../../../app/hooks"
import { BarChartItemScale } from "./barChartItemScale/barChartItemScale"
import "./barChartItemStyles.css"

interface Props {
    offerData: OfferProps
}

export const BarChartItem = ({ offerData }: Props) => {

    const dispatch = useAppDispatch()

    const checkingForTabletResolution = () => window.matchMedia("(max-width: 768px)").matches

    const { name, minimumPayment, maximumPayment, freeLimit, storageCost, transferCost, icon } = offerData

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

    const priceWithoutLimits: number = checkFreeLimit(+storageVolume) * customCost.value + checkFreeLimit(+transferVolume) * transferCost

    const finalPrice = () => {
        if (minimumPayment && minimumPayment > priceWithoutLimits) {
            return minimumPayment
        }
        else
            if (
                maximumPayment && maximumPayment < priceWithoutLimits
            ) {
                return maximumPayment
            }
            else {
                return priceWithoutLimits
            }
    }

    window.addEventListener('resize', function () {
        setTimeout(function () {
            setIsTable(checkingForTabletResolution)
        }, 200)
    })

    useEffect(() => {
        setIsTable(checkingForTabletResolution)
        setCustomCost(typeof storageCost === "number" ? { name: "", value: storageCost } : storageCost[0])
    }, [])

    useEffect(() => {
        dispatch(setFinalPrices({
            [name]: +finalPrice().toFixed(2)
        }))
    }, [finalPrice])

    return (
        <div className="barChartItem">
            <div className="barChartItemLogoWrapper">
                <div className="barChartItemDescriptionWrapper">
                    <p className="barChartItemDescription">{name}</p>
                    {typeof storageCost === "object" &&
                        <form className="barChartItemOptions">
                            {storageCost.map((option, index) =>
                                <RadioButton
                                    key={index}
                                    name={name}
                                    label={option.name}
                                    cost={option.value}
                                    setValue={setCustomCost}
                                    checked={option.name === customCost.name} />)
                            }
                        </form>}
                </div>
                <img className="barChartItemIcon"
                    src={icon}
                    alt={name}
                />
            </div>
            <BarChartItemScale finalPrice={+finalPrice().toFixed(2)} isTable={isTable} companyName={name} />
        </div>
    )
}