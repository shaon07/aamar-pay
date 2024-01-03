import { styles } from "../../styles/tailwind/selectbox/index.css";
import { selectOptions } from "../../types";
import { checkArray } from "../../utils/checkArray";

type SelectBoxProps = {
    label?: string;
    onChange?: (value: string) => void;
    options: selectOptions[];
    className?: string;
}

export default function SelectBox({ options, label, className, onChange = () => { } }: SelectBoxProps) {
    return (
        <div className={`${className}`}>
            <label htmlFor="countries" className={`${styles.label}`}>
                {label || "Select an option"}
            </label>

            <select id="countries" className={`${styles.select}`} onChange={e => onChange(e.target.value)}>
                <option selected>Choose a options</option>
                {
                    checkArray(options) && options.map((option) => <option value={option.value}>{option.label}</option>)
                }
            </select>
        </div>
    )
}
