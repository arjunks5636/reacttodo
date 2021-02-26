import React, { Component } from 'react'

export class Demo extends Component {
    constructor(props){
        super(props);
        this.state={items:[""],txtcon:""};
      

    }
    txtvalue=(e)=>{this.setState({txtcon:e.target.value})};
    additem=(e)=>{
        let currenttext=this.state.txtcon;
        let currentitems=this.state.items;
        currentitems.push(currenttext);
        this.setState({items:currentitems});
    }
    removeitem=(i)=>{
        if(!window.confirm("are you sure that you want to delete this?")); 
        let currentitems=this.state.items;
        currentitems.splice(i,1);
        this.setState({items:currentitems})
    }
    render() {
        return (
            <div className="">
                <input type="text" onChange={this.txtvalue}></input>
                <button onClick={this.additem}>Add</button>
                <ul>
                    
                        {this.state.items.map((itm,k)=>{
                            return (<li>{itm}<button onClick={()=>{this.removeitem(k)}}>Delete</button></li>)
                        })}
                </ul>
           
                    
            </div>
        )
    }
}

export default Demo;
