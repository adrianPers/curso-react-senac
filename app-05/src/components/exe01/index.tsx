
type Exe01Props = {  
    status: boolean; 
    setStatus: () => void;
}

import styles from './exe01.module.css'

const exe01 = (props : Exe01Props) => {

  return (
    <div className={styles.boxExe01}>
      <button 
      className={styles.btnExe01}
      onClick={props.setStatus}>
        {props.status ? 'Ocultar' : 'Mostrar'}
      </button>

      { props.status && (
        
      <p>Você consegue me ver agora?</p>

      )}
    </div>
  );
}

export default exe01