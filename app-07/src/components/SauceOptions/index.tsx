
import styles from './sauceOptions.module.css'

type SauceOptionsProps = {

    onSauceChange: (sauce : string) => void
    
}

const SauceOptions = (props : SauceOptionsProps) => {

    const sauces = ['Tomate', 'Branco', 'Barbecue'];

    function handleSauceChange(event: React.ChangeEvent<HTMLInputElement>) {
       if (event.target.checked) {
            props.onSauceChange(event.target.id);
        }
    }

    return (
        <div className={styles.boxSauces}>
            {sauces.map((sauce, index) => (
                <>
                    <input
                    type='radio'
                    name='sauce'
                    id={sauce}
                    key={index} 
                    onChange={(event) => handleSauceChange(event)}/>
                    <label 
                    htmlFor={sauce} 
                    className={styles.sauceLabel}
                    >
                        {sauce}
                    </label>
                </>
            ))}
        </div>
    )

}

export default SauceOptions;
