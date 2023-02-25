import "./rangesSelectBlockStyles.css"

interface Props {
    children?: JSX.Element[]
}

export const RangesSelectBlock = ({ children }: Props) => {
    return (
        <div className="rangesSelectBlock">
            {children}
        </div>
    )
}