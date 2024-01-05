import { styles } from '../../styles/tailwind/pills/index.css'

type PillProps = {
    type: "open" | "closed"
}

export default function Pill({ type = "open" }: PillProps) {
    return (
        <span className={`${styles[type]}`}>
            <span className=' h-[20px]'>{type}</span>
        </span>
    )
}
