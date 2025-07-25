
import styles from './textArea.module.css';

type TextAreaProps = {
    label: string;
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
            rows={props.rows || 5}>
            </textarea>
        </div>
    )

}

export default TextArea;