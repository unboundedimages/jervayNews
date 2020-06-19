import React from "react";

class Tester extends React.Component {

    setState= {
        myapi:{}
    }

    componentDidMount() {
        fetch("https://jervay.agency/tester")
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        // let arr = [];
        // Object.keys(this.state.myapi).forEach((key) => arr.push(this.state.myapi[key]));
        return (
            <div>
               Hello world!
            </div>
        )
    }
}
export default Tester;