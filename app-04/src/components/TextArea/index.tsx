
import styles from './textArea.module.css';

type TextAreaProps = {
    label: string;
    name: string;
    value?: string;
    update: (name: string, value: string) => void;
    rows?: number;
    placeholder?: string;
    
}

const TextArea = (props : TextAreaProps) => {
    return (
        <div className={styles.textAreaBox}>
            <label className={styles.textAreaLabel}>
                {props.label}
            </label>

            <textarea 
            className={styles.textArea} 
            placeholder={props.placeholder}
            rows={props.rows || 5}
            value={props.value}
            onChange={e => {
                props.update(props.name, e.target.value)
            }}>
            </textarea>
        </div>
    )

}

export default TextArea;