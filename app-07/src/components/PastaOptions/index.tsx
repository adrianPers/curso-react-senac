
import styles from './pastaOptions.module.css';

type PastaOptionsProps = {
    onPastaChange: (mass: string) => void;
}


const PastaOptions = (props: PastaOptionsProps) => {
    
    const pasta = ['Fina', 'Média', 'Grossa'];

    return(
        <div className={styles.boxPastas}>

           {pasta.map((mass, index) => (
            <button
                key={index}
                className={styles.pastaButton}
                onClick={() => props.onPastaChange(mass)}>
                    {mass}
            </button>
           ))}

        </div>
    )

}

export default PastaOptions;