import React, { useState, Component, useRef, useEffect } from 'react';

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
        console.log('counter2');
        return (
            <div>
                <h1>counter2</h1>
                <p>you click {this.state.count} times</p>
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
    console.log('counter')
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

function Counter4 () {
    const [count, setCount] = useState(0);
    const currentCount = useRef(count);

    useEffect(() => {
        currentCount.current = count;
    });

    const log = () => {
        setCount(count + 1);
        setTimeout(() => {
            console.log(currentCount.current);
        }, 3000);
    };
    return (
        <div>
            <h1>counter4</h1>
            <p>you click {count} times</p>
            <button onClick={log}>click</button>
        </div>
    );
};

function Counter5 () {
    const [count, setCount] = useState(0);
    const currentCount = UseCurrentValue(count);

    const log = () => {
        setCount(count + 1);
        setTimeout(() => {
            console.log(currentCount.current);
        }, 3000);
    };
    return (
        <div>
            <h1>counter5</h1>
            <p>you click {count} times</p>
            <p>{currentCount.current}</p>
            <button onClick={log}>click</button>
        </div>
    );
};

function UseCurrentValue(value) {
    const ref = useRef(0);

    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref;
};

function FcPage () {
    return (
    <div>
        <h1>FcPage</h1>
        <Counter/>
        <Counter2></Counter2>
        <Counter3/>
        <Counter4/>
        <Counter5/>
    </div>
    );
};

export default FcPage;