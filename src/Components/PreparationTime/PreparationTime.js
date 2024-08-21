import React from 'react';
import * as styles from './styles.module.css';

function PreparationTime() {
    return(
        <section className={styles.container}>
            <h1>
                Preparation Time
            </h1>
            <ul className={styles.preparation}>
                <li>
                    <strong>Total:</strong>&nbsp;
                    Approximately 10 minutes
                </li>
                <li>
                    <strong>Preparation:</strong>&nbsp;
                    5 minutes
                </li>
                <li>
                    <strong>Cooking:</strong>&nbsp;
                    5 minutes
                </li>
            </ul>
        </section>
    )
}

export default PreparationTime;