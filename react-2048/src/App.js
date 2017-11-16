import React, { Component } from 'react';
import logo from './2048_logo.svg';

import Header from './components/Header';
import Table from './components/Table';

import './App.css';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logo: logo,
            matrix: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', '']
            ],
            score: 0,
            winScore: 16,
            keyLeft: true,
            keyUp: true,
            keyRight: true,
            keyDown: true,
            gameStatus: 'wait',
            message: ''
        };
    }

    componentWillMount() {
        console.log('component will mount');
        this.populateMatrix();
    }

    /**
     * Update score
     *
     * @param integer score
     */
    changeScore = (score) => {
        this.setState({
            score: score
        });
    }

    /**
     * start a new game
     */
    onStartNewGame = () => {
        this.setState({
            matrix: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', '']
            ],
            score: 0,
            winScore: 16,
            keyLeft: true,
            keyRight: true,
            keyUp: true,
            keyDown: true,
            gameStatus: 'wait',
            message: ''
        });

        setTimeout(() => {
            this.populateMatrix();
        }, 50);
    }

    /**
     * Continue the game, and change the double the winScore
     */
    onGameContinue = () => {
        this.setState({
            gameStatus: 'wait',
            winScore: this.state.winScore * 2,
            keyLeft: true,
            keyRight: true,
            keyUp: true,
            keyDown: true,
        })
    }

    /**
     * When you win the game, it change gameStatus to 'win',
     * and put the wrapper-win over table.
     */
    winGame = () => {
        this.setState({
            gameStatus: 'win',
            message: 'You win !',
            keyLeft: false,
            keyRight: false,
            keyUp: false,
            keyDown: false,
        })
    }

    /**
     * When you can't make any move, it change all the keys status to false,
     * the gameStatus to 'loss', and put the wrapper-loss over table.
     */
    lossGame = () => {
        this.setState({
            keyLeft: false,
            keyRight: false,
            keyUp: false,
            keyDown: false,
            gameStatus: 'loss',
            message: 'Game Over !'
        });
    }

    /**
     * Manage the keys status
     *
     * @param bool matrixChange
     *      is use to see if the matrix was change to set other
     *      keys status to true is those are false
     *
     * @param bool squaresCollapse
     *      is use to see if some squares was collapse, if not, randomly choose
     *      if player can use the same key for the next move
     *
     * @param string key
     */
    changeKeysStatus = (matrixChange, squaresCollapse, key) => {
        //choose if the player can use the same key for the next move
        let keyPressTimes = ((squaresCollapse) ? 1 : Math.random() < 0.9 ? 1 : 2);

        switch (key) {
            case 'keyLeft':
                if (matrixChange && keyPressTimes < 2) {
                    if (!this.state.keyLeft) this.setState({ keyRight: true });
                    if (!this.state.keyUp) this.setState({ keyUp: true });
                    if (!this.state.keyDown) this.setState({ keyDown: true });
                } else {
                    if (this.state.keyLeft) this.setState({ keyLeft: false });
                }
                break;
            case 'keyRight':
                if (matrixChange && keyPressTimes < 4) {
                    if (!this.state.keyLeft) this.setState({ keyLeft: true });
                    if (!this.state.keyUp) this.setState({ keyUp: true });
                    if (!this.state.keyDown) this.setState({ keyDown: true });
                } else {
                    if (this.state.keyRight) this.setState({ keyRight: false });
                }
                break;
            case 'keyUp':
                if (matrixChange && keyPressTimes < 4) {
                    if (!this.state.keyLeft) this.setState({ keyLeft: true });
                    if (!this.state.keyRight) this.setState({ keyRight: true });
                    if (!this.state.keyDown) this.setState({ keyDown: true });
                } else {
                    if (this.state.keyUp) this.setState({ keyUp: false });
                }
                break;
            case 'keyDown':
                if (matrixChange && keyPressTimes < 4) {
                    if (!this.state.keyLeft) this.setState({ keyLeft: true });
                    if (!this.state.keyRight) this.setState({ keyRight: true });
                    if (!this.state.keyUp) this.setState({ keyUp: true });
                } else {
                    if (this.state.keyDown) this.setState({ keyDown: false });
                }
                break;
            default: console.log('wrong key !!');
        }
    }

    /**
     * Put the first 2 numbers when the game start
     */
    populateMatrix = () => {
        let matrixx = this.state.matrix;
        let matrixSize = this.state.matrix.length;

        let row = Math.floor(Math.random() * matrixSize);
        let coll = Math.floor(Math.random() * matrixSize);

        let row1 = Math.floor(Math.random() * matrixSize);
        let coll1 = Math.floor(Math.random() * matrixSize);

        while (row === row1) {
            row1 = Math.floor(Math.random() * matrixSize);
        }

        matrixx[row][coll] = Math.random() < 0.9 ? 2 : 4;
        matrixx[row1][coll1] = Math.random() < 0.9 ? 2 : 4;

        this.setState({ matrix: matrixx });
    }

    render() {
        console.log('app render');

        return (
            <div className="App">

                <Header
                    logo = {this.state.logo}
                    score = {this.state.score}
                    newGame = {this.onStartNewGame}
                />

                <Table
                    initialMatrix =     {this.state.matrix}
                    score =             {this.state.score}
                    winAt =             {this.state.winScore}
                    left =              {this.state.keyLeft}
                    right =             {this.state.keyRight}
                    up =                {this.state.keyUp}
                    down =              {this.state.keyDown}
                    initialStatus =     {this.state.gameStatus}
                    initialMessage =    {this.state.message}
                    newScore =          {this.changeScore}
                    keysStatus =        {this.changeKeysStatus}
                    newGame =           {this.onStartNewGame}
                    continueGame =      {this.onGameContinue}
                    gameWin =           {this.winGame}
                    gameLoss =          {this.lossGame}

                />

            </div>
        );
    }
}


export default App;