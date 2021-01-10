import React from 'react';
import AIT from './components/AIT.jpg';
import Grid from '@material-ui/core/Grid';
import Header from './components/header';
import Footer from './components/footer';
import Research from './components/research';
import Header1 from './components/header1';



function App() {
  return (
    <div>
      <Header />
      <Grid container direction="column" >
        <Grid item><img src={AIT} width="100%" height="300" alt="college" />
        <div style={{
          position:'absolute',
          color:'white',
          top:200,
          left:'50%',
          fontSize: 40,
          transform:'translateX(-50%)'
        }}>Computer Science and Engineering
        </div>
        </Grid>
        <Header1/>
      </Grid>
      <Research />
      <Footer />
    </div>
  );
}

export default App;