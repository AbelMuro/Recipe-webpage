import React from 'react';
import Header from './Components/Header';
import PreparationTime from './Components/PreparationTime';
import Ingredients from './Components/Ingredients';
import Instructions from './Components/Instructions';
import Nutrition from './Components/Nutrition';
import './styles.css';


//missing nutrition component
function App() {
    return(
        <main className={'container'}>
            <Header/>
            <PreparationTime/>
            <Ingredients/>
            <hr/>
            <Instructions/>
            <hr/>
            <Nutrition/>
        </main>
    )
}

export default App;