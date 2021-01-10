import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(15, 39, 48)",
    color: theme.palette.common.white,
    
    padding: theme.spacing(2),
  },
  body: {
    fontSize: 15,
  },
  table:{
    color:"rgb(255,255,255)", 
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor:"rgb(209, 57, 46)",
      color:theme.palette.common.white,
    },
}))(TableRow);

function createData(Author, Title,Journal, Date, Paper) {
  return { Author, Title,Journal, Date, Paper };
}

const rows = [
  createData('Dr.____', 'Name', 'Journal', 'oct 2019', ''),
  createData('Dr.____', 'Name', 'Journal', 'jan 2020', ''),
  createData('Dr.____', 'Name', 'Journal', 'march 2020', ''),
  createData('Dr.____', 'Name', 'Journal', 'april 2020', ''),
  createData('Dr.____', 'Name' ,'Journal', 'nov 2020', ''),
];

const useStyles = makeStyles({
  table: {
    width:750,
    marginBottom:100,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
       <div style={{
          position:'absolute',
          color:'black',
          top:480,
          left:'50%',
          fontSize: 30,
          transform:'translateX(-50%)'
        }}>Research Publications
        </div>
      <Table className={classes.table} aria-label="customized table" align="center">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.head}>Author</StyledTableCell>
            <StyledTableCell align="center">Title of the paper</StyledTableCell>
            <StyledTableCell align="center">Journal/Conference</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Paper</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Author}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.Author}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Title}</StyledTableCell>
              <StyledTableCell align="center">{row.Journal}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
              <StyledTableCell align="center">{row.Paper}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}