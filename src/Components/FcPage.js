import React, { useState, Component, useRef } from 'react';

class Counter2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    log = () => {
        this.setState({
            count: this.state.count + 1
        });
        setTimeout(() => {
            console.log(this.state.count);
        }, 3000);
    };

    render() {
        return (
            <div>
                <h1>counter2</h1>
                <p>you click {this.state.count} time</p>
                <button onClick={this.log}>click me</button>
            </div>
        )
    }
}


function Counter () {
    const [count, setCount] = useState(0);

    const log = () => {
        setCount(count + 1);
        setTimeout(() => {
            console.log(count);
        }, 3000);
    };
    return (
        <div>
            <h1>counter1</h1>
            <p>you click {count} times</p>
            <button onClick={log}>click</button>
        </div>
    );
};

function Counter3 () {
    const count = useRef(0);

    const log = () => {
        count.current++;
        setTimeout(() => {
            console.log(count.current);
        }, 3000);
    };
    return (
        <div>
            <h1>counter3</h1>
            <p>you click {count.current} times</p>
            <button onClick={log}>click</button>
        </div>
    );
};

function FcPage () {
    return (
    <div>
        <h1>FcPage</h1>
        <Counter/>
        <Counter2></Counter2>
        <Counter3/>
    </div>
    );
};

export default FcPage;