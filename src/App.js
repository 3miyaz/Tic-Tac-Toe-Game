import React from 'react';
import Game from './components/Game';
import './App.css';

const App = () => {
    return (
        <div className='main-section'>
            <h2 className='tic-tac-toe-title'>Game of tic-tac-toe: </h2>
            <div className='gamme'>
                <Game />
            </div>
        </div>
    );
}

export default App;