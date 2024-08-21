import React from 'react';
import * as styles from './styles.module.css';

function Ingredients() {
    return(
        <section className={styles.container}>
            <h1>
                Ingredients
            </h1>
            <ul className={styles.ingredients}>
                <li>
                    2-3 large eggs
                </li>
                <li>
                    Salt, to taste
                </li>
                <li>
                    Pepper, to taste
                </li>
                <li>
                    1 tablespoon of butter or oil
                </li>
                <li>
                    Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </li>
            </ul>
        </section>
    )
}

export default Ingredients;