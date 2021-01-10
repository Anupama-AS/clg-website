import React from 'react';
import { AppBar } from "@material-ui/core";
import { Button,Toolbar } from "@material-ui/core";
//import {Typography } from "@material-ui/core"
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(()=>({
    buttonstyles:{
        color:"rgb(255,255,255)",
        borderRadius: "15px",
        backgroundColor:"rgb(247, 19, 2)",
        width:"100px",
        display:"flex",
        alignContent:"spaceAround",
        justifyContent:"spaceAround"
        
    },
    appbarstyles:{
        backgroundColor:"rgb(209, 57, 46)"
    }
    
}));

const Header =  ()=> {
    const classes = useStyles();
        return ( 
            <AppBar position="static" className={classes.appbarstyles} >
                <Toolbar>
                    <SchoolSharpIcon className={classes.iconstyles}></SchoolSharpIcon>
                    <div style={{ width: '100%' }}>
                      <Box display="flex" flexDirection="row" justifyContent="space-around" p={1} m={1} bgcolor="rgb(209, 57, 46)" >
                         <Box p={1} >
                            Home
                          </Box>
                          <Box p={1} >
                            Leadership
                          </Box>
                          <Box p={1} >
                            Academics
                          </Box>
                          <Box p={1} >
                            Important Documents
                          </Box>
                          <Box p={1} >
                            TEQUIP
                          </Box>
                          <Box p={1} >
                          Placements
                          </Box>
                          <Box p={1} >
                            Examinations
                          </Box>
                          <Box p={1} bgcolor="rgb(209, 57, 46)">
                            Events
                          </Box>
                          </Box>
                    </div>
                        <Button variant="contained" color="inherit" className={classes.buttonstyles}>Login</Button>
                </Toolbar>
              </AppBar>
       );
} 
export default Header;
