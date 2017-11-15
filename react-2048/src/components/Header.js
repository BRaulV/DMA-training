import React, { Component } from 'react';


class Header extends Component {
    /**
     * Reset all for a new game
     */
    onNewGame = () => {
        this.props.newGame();
    }

    render() {
        console.log('header render');
        return (
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <h2>Score: {this.props.score}</h2>
                <button className="btn btn-primary" onClick={this.onNewGame}>New game</button>
            </header>
        );
    }
}

export default Header;