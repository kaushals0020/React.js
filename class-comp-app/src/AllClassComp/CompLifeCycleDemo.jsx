import { Component } from "react";

export default class CompLifeCycleDemo extends Component{

    constructor(){
        super();
        console.log("init")
    }
    render(){
        return <h2>Component Life Cycle</h2>

    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    shouldComponentUpdate(){
        console.log("Should Component Update");
    }
    componentWillUnmount(){
        console.log("Component will Unmount")
    }
}