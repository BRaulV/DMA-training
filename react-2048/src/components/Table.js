import React, { Component } from 'react';

import Square from './Square';




class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matrix: props.initialMatrix,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        //check if you cand make another move, if not, the game end
        if (!(this.props.left || this.props.rigth || this.props.up || this.props.down) && this.props.initialStatus !== 'win') {
            // console.log('You loss !!!');
            this.props.gameLoss();
            return;
        }

        switch (e.keyCode) {
            case 37:
                // console.log('You just pressed <!');
                if (this.props.left) {
                    this.changeMatrixToLeft();
                }
                break;
            case 38:
                // console.log('You just pressed ^!');
                if (this.props.up) {
                    this.changeMatrixToUp();
                }
                break;
            case 39:
                // console.log('You just pressed >!');
                if (this.props.rigth) {
                    this.changeMatrixToRigth();
                }
                break
            case 40:
                // console.log('You just pressed down');
                if (this.props.down) {
                    this.changeMatrixToDown();
                }
                break;
            default: console.log('wrong key !!');
        }

        if (this.checkWin(this.props.initialMatrix)) {
            // console.log('You win !!!')
            this.props.gameWin();
            return;
        }
    }

    /**
     * Move all matrix number to left and collapse where it's possible
     */
    changeMatrixToLeft = () => {
        let matrixChange = false;
        let squaresCollapse = false;
        let score = this.props.score;
        let matrix = this.props.initialMatrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 1; j < matrix[i].length; j++) {

                if (matrix[i][j]) {
                    var coll = j;

                    while (coll - 1 >= 0) {
                        if (!matrix[i][coll - 1]) {
                            matrix[i][coll - 1] = matrix[i][coll];
                            matrix[i][coll] = '';
                            coll --;
                            matrixChange = true;
                        } else if (matrix[i][coll] === matrix[i][coll - 1]) {
                            matrix[i][coll - 1] *= 2;
                            matrix[i][coll] = '';

                            //sum the score
                            score += matrix[i][coll - 1];
                            matrixChange = true;
                            squaresCollapse = true;

                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        //get one empty pair of indexes if exist
        let indexForNewValue = this.getIndexForNewValue();

        //put a new number at that pair if indexes, randomly between 2 and 4
        if (indexForNewValue) {
            matrix[indexForNewValue.i][indexForNewValue.j] = Math.random() < 0.9 ? 2 : 4;
            matrixChange = true;
        }

        //send the new score to update it
        this.props.newScore(score);

        //send values to manage keys status
        this.props.keysStatus(matrixChange, squaresCollapse, 'keyLeft');
    };

    /**
     * Move all matrix number to up and collapse where it's possible
     */
    changeMatrixToUp = () => {
        let matrixChange = false;
        let squaresCollapse = false;
        let score = this.props.score;
        let matrix = this.props.initialMatrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 1; j < matrix[i].length; j++) {

                if (matrix[j][i]) {
                    var row = j;

                    while (row > 0) {
                        if (!matrix[row - 1][i]) {
                            matrix[row - 1][i] = matrix[row][i];
                            matrix[row][i] = '';
                            row --;
                            matrixChange = true;
                        } else if (matrix[row][i] === matrix[row - 1][i]) {
                            matrix[row - 1][i] *= 2;
                            matrix[row][i] = '';

                            score += matrix[row - 1][i];
                            matrixChange = true;
                            squaresCollapse = true;

                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        var indexForNewValue = this.getIndexForNewValue();

        if (indexForNewValue) {
            matrix[indexForNewValue.i][indexForNewValue.j] = Math.random() < 0.9 ? 2 : 4;
            matrixChange = true;
        }

        this.props.newScore(score);
        this.props.keysStatus(matrixChange, squaresCollapse, 'keyUp');
    };

    /**
     * Move all matrix number to rigth and collapse where it's possible
     */
    changeMatrixToRigth = () => {
        let matrixChange = false;
        let squaresCollapse = false;
        let score = this.props.score;
        let matrix = this.props.initialMatrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = matrix[i].length - 2; j >= 0; j--) {

                if (matrix[i][j]) {
                    var coll = j;

                    while (coll + 1 < matrix[i].length) {
                        if (!matrix[i][coll + 1]) {
                            matrix[i][coll + 1] = matrix[i][coll];
                            matrix[i][coll] = '';
                            coll ++;

                            matrixChange = true;
                        } else if (matrix[i][coll] === matrix[i][coll + 1]) {
                            matrix[i][coll + 1] *= 2;
                            matrix[i][coll] = '';

                            score += matrix[i][coll + 1];
                            matrixChange = true;
                            squaresCollapse = true;

                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        var indexForNewValue = this.getIndexForNewValue();

        if (indexForNewValue) {
            matrix[indexForNewValue.i][indexForNewValue.j] = Math.random() < 0.9 ? 2 : 4;
            matrixChange = true;
        }

        this.props.newScore(score);
        this.props.keysStatus(matrixChange, squaresCollapse, 'keyRigth');

        // return matrix;
    };

    /**
     * Move all matrix number to down and collapse where it's possible
     */
    changeMatrixToDown = () => {
        let matrixChange = false;
        let squaresCollapse = false;
        let score = this.props.score;
        let matrix = this.props.initialMatrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = matrix[i].length - 2; j >= 0; j--) {

                if (matrix[j][i]) {
                    var row = j;

                    while (row + 1 < matrix[i].length) {
                        if (!matrix[row + 1][i]) {
                            matrix[row + 1][i] = matrix[row][i];
                            matrix[row][i] = '';
                            row ++;
                            matrixChange = true;
                        } else if (matrix[row][i] === matrix[row + 1][i]) {
                            matrix[row + 1][i] *= 2;
                            matrix[row][i] = '';

                            score += matrix[row + 1][i];
                            matrixChange = true;
                            squaresCollapse = true;

                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        var indexForNewValue = this.getIndexForNewValue(matrix);

        if (indexForNewValue) {
            matrix[indexForNewValue.i][indexForNewValue.j] = Math.random() < 0.9 ? 2 : 4;
            matrixChange = true;
        }

        this.props.newScore(score);
        this.props.keysStatus(matrixChange, squaresCollapse, 'keyDown');

        // return matrix;
    };

    /**
     * Serch for all empty indexes from matrix, and 
     * randomly choose one pair where to put the new number
     *
     * @return indexes or false
     */
    getIndexForNewValue = () => {
        let index = [];
        let matrix = this.props.initialMatrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (!matrix[i][j]) {
                    index.push({ i: i, j: j });
                }
            }
        }

        if (index.length > 0) {
            return index[Math.floor(Math.random() * index.length)];
        } else {
            return false;
        }
    }

    /**
     * Check to see if the player win the game
     */
    checkWin = (matrix) => {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === this.props.winAt) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        // console.log('table render');

        return (
            <section>

                <Square
                    matrix = {this.props.initialMatrix}
                    status = {this.props.initialStatus}
                    message = {this.props.initialMessage}
                    gameStart = {this.props.newGame}
                    gameContinue = {this.props.continueGame}
                />

            </section>
        );
    }
}

export default Table;