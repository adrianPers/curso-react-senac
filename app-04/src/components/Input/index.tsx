
import styles from './input.module.css';

type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;  
    required?: boolean;
    update: (name: string, value: string) => void;
}

const Input = (props: InputProps) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>
                {props.label}
                {props.required && <span className={styles.required}>*</span>}
            </label>
            <input 

                className={styles.input}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                value={props.value}
                required={props.required}
                onChange={(e) => {
                   
                        props.update(props.name, e.target.value);
                
                }}
            />
            <p></p>
        </div>
    )
}

export default Input;