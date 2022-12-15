import React from "react";
import Board from './gameThings/Board'
import './style/style.css'

class Game extends React.Component {
    /**
     * Initial state of the game
     */
    initialize = () => {
        return {
            history: [
                {
                    squares: Array(9).fill(null),
                    location: {
                        col: 0,
                        row: 0
                    },
                    active: false,
                    moveNumber: 0
                }
            ],
            xIsNext: true,
            stepNumber: 0,
            toggle: false
        };
    };

    state = this.initialize();

    reset = () => {
        this.setState(this.initialize());
    };

    jumpTo = step => {
        let history = this.state.history;

        history.forEach(item => {
            item.active = false;
        });

        history[step].active = true;
        this.setState({
            history: history,
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    };

    handleClick = i => {
        /**
         * If we jumped to some previous step, and then make
         * a new move from that point, we throw away all "future"
         * history that will now become irrelevant.
         *
         * slice(startingPoint, endPoint)
         *
         * startingPoint - Array index from where the "slicing" starts.
         * endPoint - All array indices less than endPoint will be included in "slicing"
         */
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const columns = 3;

        /**
         * Calculate location of square when clicked
         */
        const col = Math.floor(i % columns) + 1;
        const row = Math.floor(i / columns) + 1;

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";

        /**
         * concat() method does not mutate the Array
         * unlike Array.push().
         */
        this.setState(prevState => ({
            history: history.concat([
                {
                    squares: squares,
                    location: {
                        col: col,
                        row: row
                    },
                    active: false,
                    moveNumber: history.length
                }
            ]),
            xIsNext: !prevState.xIsNext,
            stepNumber: history.length
        }));
    };



    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let result = {
            status: "",
            win: {}
        };
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                result = {
                    status: "win",
                    win: { player: squares[a], squares: [a, b, c] }
                };
                return result;
            }
        }
        let tempSq = squares.filter(item => item === null);
        if (tempSq.length === 0) {
            result = { status: "draw", win: {} };
            return result;
        }
        return null;
    };

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const result = this.calculateWinner(current.squares);
        const gameStatus = result && result.status ? result.status : null;

        const moves = history.map((move, index) => {
            const desc = index ? "Go to move #" + index : "Go to game start";

            let active = " ";
            if (move.active) {
                active = "active";
            } else {
                active = "normal";
            }
            return (
                <li key={index}>
                    <button
                        className={active}
                        key={`${move.location.col}_${move.location.row}`}
                        onClick={() => this.jumpTo(index)}
                    >
                        {`${desc} (${move.location.col}, ${move.location.row})`}
                    </button>
                </li>
            );
        });


        moves.sort((a, b) => {
            if (this.state.toggle) {
                return b.key - a.key;
            } else {
                return a.key - b.key;
            }
        });




        return (
            <div className="game flex h-screen justify-center items-center text-xl ">
                {
                    gameStatus === "draw" ? (
                        <div className="draw text-4xl text-center">
                            <h2>Draw!</h2>
                            <button onClick={() => this.reset()} className='p-2 border-solid border-2 border-sky-500 rounded-xl text-4xl'>Play again</button>
                        </div>
                    ) : (

                        <div className="game-board">
                            <Board
                                squares={current.squares}
                                winningSquares={gameStatus === "win" ? result.win.squares : []}
                                onClick={(i, col, row) => this.handleClick(i, col, row)}
                            />
                            {
                                gameStatus === "win" ? (
                                    <div className="win">
                                        <h2 className='p-3'>{`"${result.win.player}" is winner!`} </h2>
                                        <button onClick={() => this.reset()} className='p-2 border-solid border-2 border-sky-500 rounded-xl text-4xl'>Play again</button>
                                    </div>
                                ) : (
                                    <div className="text-center ">
                                        <button onClick={() => this.reset()} className=' p-5 text-3xl text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300'>Reset game</button>
                                    </div>
                                )}
                        </div>
                    )}


            </div>
        );
    }
}

export default Game;
