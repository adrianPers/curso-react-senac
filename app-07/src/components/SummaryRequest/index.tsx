
import styles from './summaryRequest.module.css';

type SummaryRequestProps = {
    sauce: string;
    pasta: string;
}

const summaryRequest = (props : SummaryRequestProps) => {
    return (
        <div className={styles.boxSummary}>
            <h3>Resumo do Pedido</h3>
            <p><strong>Massa:</strong> {props.pasta}</p>
            <p><strong>Molho:</strong> {props.sauce}</p>
        </div>
    )
}

export default summaryRequest;