import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../app/hooks"
import "./rangeSelectInputStyles.css"

interface Props {
    id: string,
    value: string
    setValue: ActionCreatorWithPayload<string>
}

export const RangeSelectInput = ({ id, value, setValue }: Props) => {

    const dispatch = useAppDispatch()

    return (
        <div className="slideContainer">
            <p className="sliderTitle">{id}: <span className="sliderValue">{value}</span> GB</p>
            <input type="range" step="1" min="0" max="1000" className="slider" id={id} onChange={e => { dispatch(setValue(e.target.value)) }} />
            <div className="slideLimits">
                <p className="limit">0</p>
                <p className="limit">1000</p>
            </div>

        </div>

    )
}
