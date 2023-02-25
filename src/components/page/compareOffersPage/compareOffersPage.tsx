// import { storageVolume, transferVolume } from "../../../app/offersPage/offersPageSelector"
import { useSelector } from "react-redux"
import { setStorageVolume, setTransferVolume } from "../../../app/offersPage/offersPageSlice"
import { RootState } from "../../../app/store"
import { BarChart } from "../../barChart/barChart"
import { RangeSelectInput } from "../../inputFields/rangeSelectInput/rangeSelectInput"
import { RangesSelectBlock } from "../../rangesSelectBlock/rangesSelectBlock"

export const CompareOffersPage = () => {

    const storageVolume = useSelector ((state:RootState)=> state.offers.storageVolume)
    const transferVolume = useSelector ((state:RootState)=>state.offers.transferVolume)
 

    return (
        <div className="container">
            <RangesSelectBlock>
                    <RangeSelectInput id={'Storage'} setValue={setStorageVolume} value={storageVolume} />
                    <RangeSelectInput id={'Transfer'} setValue={setTransferVolume} value={transferVolume} />
            </RangesSelectBlock>
            <BarChart />
        </div>

    )
}

