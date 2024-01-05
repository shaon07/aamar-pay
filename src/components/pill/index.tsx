import { styles } from '../../styles/tailwind/pills/index.css'

type PillProps = {
    type: "open" | "closed"
}

export default function Pill({ type = "open" }: PillProps) {
    return (
        <span className={`${styles[type]}`}>
            <span className={`w-2 h-2 me-1 bg-${type === "open" ? "green" : "red"}-500 rounded-full`}></span>
            {type}
        </span>
    )
}
