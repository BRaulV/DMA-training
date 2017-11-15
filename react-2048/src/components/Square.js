import React, { Component } from 'react';


class Square extends Component {
    /**
     * Reset all for a new game
     */
    onNewGame = () => {
        this.props.gameStart();
    }

    /**
     * Continue the game
     */
    onContinueGame = () => {
        this.props.gameContinue();
    }

    render() {
        // console.log('square render');
        // console.log('----------')
        let button;

        if (this.props.status === 'loss') {
            button = <button className="btn btn-primary" onClick={this.onNewGame}>Try again</button>;
        } else if (this.props.status === 'win') {
            button = <button className="btn btn-primary" onClick={this.onContinueGame}>Continue</button>;
        }

        return (
            <div className='container square'>
    
                <div className={"wrapper-" + this.props.status}>
                    <p>{this.props.message}</p>
                    {button}
                </div>

                {this.props.matrix.map( (values, i) =>
                    <div className="little-square-row col-xs-12" data-value="values" key={i}>
                        {values.map((value, j) =>
                            <span className={"little-square col-xs-3 class-" + value} data-value="value" key={j}>{value}</span>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Square;