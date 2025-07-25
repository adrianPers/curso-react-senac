
import styles from './exe02.module.css'
import { useState } from 'react'


const Container = () => {
    const [mensagem, setMensagem] = useState('Mensagem')
    return(
        <div className={styles.boxContainer}>
            <Item 
            mensagem={mensagem}
            setMensagem={(m) => setMensagem(m)}/>
            <button 
            onClick={() => setMensagem('container')}>
                Alterar Mensagem 
            </button>
            <span>container</span>
        </div>
    )
}

type ItemProps = {
    mensagem: string
    setMensagem: (mensagem : string) => void
}

const Item = (props : ItemProps) => {
    return(
        <div 
        className={styles.boxItem}>
            <span>item</span>
            <button
            onClick={() => {props.setMensagem('teste')}} >
                Alterar Mensagem 
            </button>
            <h2>{props.mensagem}</h2>
        </div>
    )
}

export {Container, Item}