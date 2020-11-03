import React, { Component , useState} from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  ShowDataComponent from './ShowDataComponent';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  let name, age;
  // const [name, setName] = useState();
export default class AddDataComponent extends Component {
    // const classes = useStyles();
    constructor(props) {
      super(props);
      this.state = {
        name: null, 
        age: null
      };
  
      this.submitData = this.submitData.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.child = React.createRef();
    }

 submitData(event) {
     console.log('Form values', this.state, event);

    this.child.current.getAlert(this.state);
 }

 handleChange({ target }) {
  this.setState({
    [target.name]: target.value
  });
}
//  onChange ={(event) => this.setState({age :  event.target.value})}
//  onChange ={(event) => this.setState({name :  event.target.value})}
     render() {
        return (
            <> 
            <div>
               <h2>Add Data</h2>
               <div>
                   <form>
                   <label>
        Name:
    </label>
                     <input id="name" name="name" label="Enter Name" value={this.state.name}
                     onChange ={(event) => this.setState({name :  event.target.value})}
                     /> <label>
        Age:
    </label>
                      <input id="age"  name="age" label="Enter Age" value={this.state.age}
                      onChange ={(event) => this.setState({age :  event.target.value})}

                      />
                      <Button variant="contained" color="primary" onClick= {this.submitData}>
          Add 
        </Button>
                   </form>
 
               </div>
            </div>
            <ShowDataComponent ref={this.child}  name= {name} age={age}/>
            </>
        )
    }
}
// function NewCompnent () {


//   const [name, setName] = useState();
//   const [age, setAge] = useState();

  
//  const submitData = (arg1,arg2) => {
//   // console.log('Form values', this.state);
// setName(arg1);
// setAge(arg2);
// console.log(arg1,arg2);
 
// }
//   return(
//     <> 
//     <div>
//        <h2>Add Data</h2>
//        <div>
//            <form  >
//            <label>
// Name:
// </label>
//              <input id="name" name="name" label="Enter Name" value={name}
//             // onChange={ (event) => {setName(event.target.value)}}  
//              /> <label>
// Age:
// </label>
//               <input id="age" label="Enter Age" value={age}
//             // onChange={ (event) => {setAge(event.target.value)}}  

              

//               />
//               <Button variant="contained" color="primary" onClick= {() => submitData(name,age)}>
//   Add 
// </Button>
//            </form>

//        </div>
//     </div>
//     <ShowDataComponent name= {name} age={age}/>
//     </>
// )
//   }

  // export default  NewCompnent
