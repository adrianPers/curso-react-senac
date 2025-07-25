
import styles from './exe03.module.css'

type Exe03Props = {
    name: string
    status: boolean
    onChange: () => void
}


const Exe03 = (props: Exe03Props) => {
    return (

        <div
        className={`
        ${styles.task}
         ${props.status ? styles.taskCompleted : styles.taskNotCompleted}`}>

            <input
            type="checkbox"
            onChange={() => props.onChange()} />

            {props.name}

        </div>

    )
}

export default Exe03
