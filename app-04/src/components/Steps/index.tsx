
import styles from './steps.module.css';
import svgArrowRight from '../../assets/arrow-right.svg';

type Step = {    
    nameStps: string;
    nameIcon: string;
}

type StepsProps = {
    step: Step[];
    currentStep: number;
}

const Steps = (props: StepsProps) => {
    return (

        <ul className={styles.steps}>
            {props.step.map((item, index) => 
            (
                <li 
               className={`
                        ${styles.step} 
                        ${props.currentStep >= index && styles.currentStep}
                    `}
                key={index}>


                    <span className={`${styles.numberStep} material-symbols-outlined`}>
                        {props.currentStep <= index ? item.nameIcon : 'check'}
                    </span>

                    {item.nameStps}
                    {index < props.step.length - 1 && (
                        <img 
                        className={styles.arrowRight}
                        src={svgArrowRight}/>
                    )}
                </li>
                // <p>reer</p>
            )   
            
            )}
        </ul>

    )

}

export default Steps;