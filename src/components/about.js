import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pstyle:{
        textAlign:"center",
        marginLeft:"200px",
        marginRight:"200px",
        marginTop:"50px",
        marginBottom:"50px"
    },
    h2style:{
        color:'rgb(235, 64, 52)'
    }
});

export default function About() {
    const classes = useStyles();
    return(                  
                    <div className={classes.pstyle} >                   
                    <h1 className={classes.h2style}>About Dr.Ambedkar Institue Of Technology</h1>
                    <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    </div>



    );
}