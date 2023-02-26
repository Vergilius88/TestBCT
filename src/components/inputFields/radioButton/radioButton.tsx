import "./radioButtonStyles.css"

interface Props {
    name: string
    label: string
    cost: number
    checked: boolean,
    setValue: React.Dispatch<React.SetStateAction<{
        name: string,
        value: number
    }>>
}

export const RadioButton = ({ name, label, cost, checked, setValue }: Props) => {

    return (
        <label className="radioButtonWrapper">
            <input
                className="radioButton"
                type="radio"
                value={cost}
                onChange={e => { setValue({ name: label, value: +e.target.value }) }}
                name={name}
                checked={checked}
            />
            {label}
        </label>

    )
}