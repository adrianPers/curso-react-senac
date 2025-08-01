
import styles from './listOfIngredients.module.css';

const ListOfIngredients = () => {

    const ingredients = ['Massa', 'Molho', 'Queijo', 'Ervas'];

    return (
        <div className={styles.boxIngredients}>
            <h3>Ingredientes</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index} className={styles.ingredientItem}>
                        <input type='checkbox' id={ingredient} />
                        <label 
                        htmlFor={ingredient} 
                        className={styles.ingredientLabel}>
                            {ingredient}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfIngredients;