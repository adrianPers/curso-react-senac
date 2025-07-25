
import styles from './buttonBox.module.css'

type Button = {
  text: string; 
  onClick: () => void; 
}

type ButtonProps = {
  buttons: Button[];
}

const Button = (props : ButtonProps)=> {
  return (
    <div 
    className={styles.buttonBox}
    style={props.buttons.length === 1 ? { justifyContent: 'flex-end' } : {}}>
    {
      props.buttons.map((button, index) => (
        <button 
          key={index} 
          className={`
            ${styles.button} 
            ${button.text === 'Voltar' ? styles.back : styles.next}
          `}
          onClick={() => button.onClick()}
        >
          {button.text}
        </button>
      ))
    }
    </div>
  )
}

export default Button