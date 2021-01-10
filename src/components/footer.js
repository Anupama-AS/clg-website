import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
    footerstyles:{    
        backgroundColor:"rgb(15, 39, 48)",
        marginTop:"40px",         
        height:"350px",
        boxShadow:"10px 10px 10px rgb(247, 247, 247)",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    lastbar:{
        border:"2px solid black",
        backgroundColor:"black",
        height:"50px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    divstyle:{
        marginLeft:"100px",
        marginTop:"50px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        height:"200px"
    },
    pstyles:{
        margin:"0"
    },
    iconstyles:{
        fill:"white",
        marginLeft:"20px",
        marginTop:"10px",
        marginRight:"20px"
    }
});

export default function Footer() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.footerstyles}>
                <div className={classes.divstyle}>
                <div>logo</div>
                <br/>
                <div >
                    <p className={classes.pstyles} >BDA, Outer Ring Rd,Near</p>
                    <p className={classes.pstyles}>Gnana Bharathi, Bengaluru</p>
                    <p className={classes.pstyles}>Karnataka 560056</p>
                </div>
                <br/>
                <div>
                    <p className={classes.pstyles}>+91 1234567890</p>
                    <p className={classes.pstyles}>+91 1234567890</p>
                </div>
                <div>
                <p>admissions@drait.org</p>
                </div>
                </div>
                </div>

            <div className={classes.lastbar}>
            <FacebookIcon className={classes.iconstyles}/>
            <LinkedInIcon className={classes.iconstyles}/>
            <InstagramIcon className={classes.iconstyles}></InstagramIcon>
            
            </div>
        
    </div>
                
    );
    
}