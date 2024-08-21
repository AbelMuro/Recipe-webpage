import React from 'react';
import * as styles from './styles.module.css';

function Nutrition(){
    return(
        <section className={styles.container}>
            <h1>
                Nutrition
            </h1>
            <p>
                The table below shows nutritional 
                values per serving without the 
                additional fillings.
            </p>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.table_header}>
                            Calories
                        </td>
                        <td className={styles.table_data}>
                            277kcal
                        </td>                        
                    </tr>
                    <tr>
                        <td className={styles.table_header}>
                            Carbs
                        </td>
                        <td className={styles.table_data}>
                            0g
                        </td>                        
                    </tr>
                    <tr>
                        <td className={styles.table_header}>
                            Protein
                        </td>
                        <td className={styles.table_data}>
                            20g
                        </td>                        
                    </tr>
                    <tr>
                        <td className={styles.table_header}>
                            Fat
                        </td>
                        <td className={styles.table_data}>
                            22g
                        </td>                        
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Nutrition