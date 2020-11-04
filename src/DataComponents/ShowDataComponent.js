import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
  export default class ShowDataComponent extends Component {
    
  constructor(props) {
     super(props);
    this.state = {
        name: this.props.name,
        age: this.props.age,
        Customers : []
    }

    console.log('showDataComponent', this.props);
}
getAlert(data) {
    console.log('getAlert from Child', data);
    
    this.state.Customers.push({
        name: data.name,
        age: data.age
    });
    this.setState({customerData: this.state.Customers});
    console.log('Customers', this.state.Customers);
  }
  remove = (rowId) => {
    // Array.prototype.filter returns new array
    // so we aren't mutating state here
    console.log(rowId);
    const arrayCopy = this.state.Customers.filter((row) => row.name !== rowId);
    console.log(arrayCopy);
    this.setState({Customers: arrayCopy});
  };
render() {
    return(
        <>
         <TableContainer component={Paper}>
         <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell> Name</TableCell>
          <TableCell> Age </TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          { this.state.Customers.map((row,i) => ( 
            <TableRow key={row.name} >
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right"></TableCell><button onClick={()=>this.remove(row.name)}>Delete Row</button>
            </TableRow>
          ))}
          </TableBody>
          </Table>
         </TableContainer>
        
        </>
    )
}
}