import React from 'react';
import images from './images'
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <img className={styles.header_image} src={images['omelette']} alt='omelette'/>
            <strong className={styles.header_title}>
                Simple Omelette Recipe
            </strong>
            <p className={styles.header_desc}>
                An easy and quick dish, perfect for any meal. 
                This classic omelette combines beaten eggs 
                cooked to perfection, optionally filled 
                with your choice of cheese, vegetables, or meats.
            </p>
        </header>   
    )
}

export default Header;