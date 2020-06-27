import React, { Component } from 'react';

import TodoItems from '../todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      checked: true

      
    };
  }



  addItem= e => {
    const itemArray = this.state.items;

    if (this.userInput.value !== '') {
      itemArray.unshift({
        text: this.userInput.value,
        key: Date.now(),
        checked:false
      });
      this.setState((prevState)=>{
        return {
          // item:prevState.items.concat(item)
        }
      })

      this.userInput.value = '';
    }
    console.log(itemArray);

    e.preventDefault();
  }
  checked=(e)=>{
    // console.log(this.state,e.target.checked,e.target.id)   
    for (var i of this.state.items){
      if(i.key==e.target.id){
        const index=this.state.items.indexOf(i)
        const items=this.state.items
        items.splice(index,1)
        this.setState({items:items})
      }
    } 
  }
  

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(userInput) => {
              // console.log(a)
              return this.userInput = userInput
            }}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} onClick={this.checked}/>
      </div>
    );
  }
}
export default TodoList;


















































// import React, { useState } from "react";


// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// // import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {e
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }












































// import React, { Component } from 'react';

// class Parent extends React.Component 
// {
  
//     constructor()
//     {
//         super();
//         this.state = {
//             number:0
//         }
//     }
  
//     increment=()=> {
//       this.setState({
//         number:this.state.number+1
//       });
//     }
//     render()
    
//     {
//       const name="nilammmmmmmmmmmmmmmmmmmmmmmmm"
//         return(
//         <div>
//       {this.state.number}<button onClick={this.increment}>Click me</button>
//         </div>
//         );
//     }
// }
// export default Parent;

















// import React, { Component } from "react";
// import Child from './child';


// class Parent extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count:0,
     
//     }

//   }
//   updateCount = () => {
//     this.setState({
//       count:this.state.count + 2
//     })

//   }

//   render() {
//     const name="Please click and see your reasult uncauntable time"
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <Child text={name} up = {this.updateCount}/>
//       </div>
//     )
//   }
// }




// export default Parent;























































// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
// class Register extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       first_name:'',
//       last_name:'',
//       email:'',
//       password:''
//     }
//   }
//   render() {
//     return (
//       <div>
//         <MuiThemeProvider>
//           <div>
//           <AppBar
//              title="Register"
//            />
//            <TextField
//              hintText="Enter your First Name"
//              floatingLabelText="First Name"
//              onChange = {(event,newValue) => this.setState({first_name:newValue})}
//              />
//            <br/>
//            <TextField
//              hintText="Enter your Last Name"
//              floatingLabelText="Last Name"
//              onChange = {(event,newValue) => this.setState({last_name:newValue})}
//              />
//            <br/>
//            <TextField
//              hintText="Enter your Email"
//              type="email"
//              floatingLabelText="Email"
//              onChange = {(event,newValue) => this.setState({email:newValue})}
//              />
//            <br/>
//            <TextField
//              type = "password"
//              hintText="Enter your Password"
//              floatingLabelText="Password"
//              onChange = {(event,newValue) => this.setState({password:newValue})}
//              />
//            <br/>
//            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//           </div>
//          </MuiThemeProvider>
//       </div>
//     );
//   }
// }
// const style = {
//   margin: 15,
// };
// export default Register;



























// import React from 'react';
// const Student=(props)=>{
//   var nilam="nilu"
// return <h1>My name {props.name}{nilam}</h1>
// }
// export default Student;






































