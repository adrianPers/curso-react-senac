
import styles from './app.module.css';
import PastaOptions from './components/PastaOptions';
import SauceOptions from './components/SauceOptions';
import SummaryRequest from './components/SummaryRequest';
import ListOfIngredients from './components/ListOfIngredients';

import {useState} from 'react';

const App = () => {

  const [sauce, setSauce] = useState('');
  const [pasta, setPasta] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  function handlePastaChange(mass: string) {
    setPasta(mass);
  }  

  function handleSauceChange(sauce: string) {
    setSauce(sauce);
  }

  function handleIngredientChange(ingredient: string) {
    if(!ingredients.some(item => item === ingredient)) {
      const newIngredients = [...ingredients, ingredient];
      setIngredients(newIngredients);
    }
  }


  return (

    <div className={styles.app}>
      <h2>Massas</h2>
      <PastaOptions 
      onPastaChange={handlePastaChange}/>
      <h2>Molhos</h2>
      <SauceOptions 
      onSauceChange={handleSauceChange}/>
      <ListOfIngredients />
      <SummaryRequest 
      sauce={sauce} 
      pasta={pasta}/>
    </div>
    
  )
}

export default App
