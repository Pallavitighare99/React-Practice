import React from 'react';
export default class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            active: null,
            who: null
        }
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.who==null){
            this.setState({who : "Learning"});
        }
    }
    render() {
        return (
            <div>
                <h1>React JS{this.state.who}</h1>
                <button onClick={() => {this.setState({ active: "yes" })}}>Activate</button>
            </div>
        )
    }
}