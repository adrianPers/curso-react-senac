
import { useState } from 'react';
import styles from './form.module.css';

const Form = () => {

    const [name, setName] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <div className={styles.form}>
            <h2>Bem-vindo(a) {name} 😁 !!!</h2>
            <input 
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => handleInput(e)}
            className={styles.inputForm} />
        </div>
    );
}

export default Form;