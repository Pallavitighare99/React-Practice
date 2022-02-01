import React from "react";

export default class Update extends React.Component {
    constructor() {
        super();
        this.state = {
            data: "This is original file"
        }
    }
    updateState() {
        this.setState({
            data: "This is updated file"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => { this.updateState() }}>Update</button>
            </div>
        )
    }
}