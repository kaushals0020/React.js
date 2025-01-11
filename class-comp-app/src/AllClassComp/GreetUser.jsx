import { Component } from "react"

export default class GreetUser extends Component{
    constructor(){
        super();
        this.state = {"UserName": "Kishu"};
        // console.log("init--Username = "+this.state.UserName);
    }

    updateName = ()=>{
        this.setState({"UserName":"Kaushal"});
    //     console.log("Updated Name : Username : "+this.state.UserName);
      }
render(){
    return<>
    <h1>Class State Component</h1>
    <p>Welcome {this.state.UserName}</p>
    <br />
    <br />
    <input type="button" value="ChangeName" onClick={this.updateName} />

    </>
}
}