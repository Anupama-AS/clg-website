import React from 'react';
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
//import {Typography } from "@material-ui/core"
//import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles =makeStyles(()=>({
    buttonstyles:{
        color:"rgb(255,255,255)",
        borderRadius: "15px",
        backgroundColor:"rgb(247, 19, 2)",
        width:"90px",
        display:"flex",
        alignContent:"spaceAround",
        justifyContent:"spaceAround"
        
    },
    appbarstyles:{
        backgroundColor:"rgb(209, 57, 46)",
        width:650,
        height:60,
        marginTop:-30,
        marginLeft:350,
        marginBottom:150,
        borderRadius:15,
    }
}));

const Header1 =()=>{
    const classes= useStyles();
    return(
        <AppBar position="static" className={classes.appbarstyles}>
            <Toolbar>
                    <div style={{ width: '100%' }}>
                      <Box display="flex" flexDirection="row" justifyContent="space-around" p={1} m={1} bgcolor="rgb(209, 57, 46)" >
                        <Box p={1} >
                        Overview
                        </Box>
                        <Box p={1} >
                          Programmes
                        </Box>
                        <Box p={1} >
                          Faculty
                        </Box>
                        <Box p={1} >
                          Research
                        </Box>
                        <Box p={1} >
                           Achievements
                        </Box>
                        <Box p={1} bgcolor="rgb(209, 57, 46)">
                          Alumini
                        </Box>
                      </Box>
                    </div>
                </Toolbar>
            </AppBar>
         );
    } 
export default Header1;
       