import React from "react";

export default class Second extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ?
                    <h1>Is it visible</h1>
                    :null
                }
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle Button</button>
            </div>
        )
    }
}