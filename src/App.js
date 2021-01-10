import './App.css';
import React from 'react';
//mport AIT from './components/AIT.jpg';
import Grid from '@material-ui/core/Grid';
import Header from './components/header';
import Footer from './components/footer';
import Management from './components/management';


export default function App() {
  return (
    <div>
      <Header/>
      <Grid container direction="column" >
        
      </Grid>
      <Management/>
      <Footer/>
    </div>
  );
}

