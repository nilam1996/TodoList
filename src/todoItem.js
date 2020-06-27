import React, { Component } from 'react';
import { withStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/Box';



const styles = theme => ({
  root: {
    backgroundColor: "red",
    // width: 50,
    // display:"block" 
    
  },  paper: {
    // marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'justify-content'
  }
});

class TodoItems extends Component {
  constructor(props) {
    super(props);
 

  }
  


  createTasks = (item) => {
    const key = item.key;
    return<div> <li key={key}>{item.text}  
    <input type="checkbox"id={key} name="vehicle1"  onChange = {(e) => this.props.onClick(e)}/>
     </li>
     </div>
    ;
  }
 


  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    const{ classes} = this.props;
    
    
    // console.log(todoEntries,"------------------------");

    return (
      <Box height='50%' border='5px solid black'>
        <TextField
     select
     SelectProps={{ autoWidth: true }}
>
        
      <div className={classes.root}>
      

        <div className={classes.paper}>
          
        <h1>My Task</h1>

            <ol>

            <checkbox
        label="Click me"
        checked={this.props.checked}
        onChange={e=>console.log(e)}
        

      />    
              {listItems}
              
            </ol>
          </div>
      </div>
      </TextField>
      </Box>
      




    );
  }
}
export default withStyles(styles)(TodoItems);






