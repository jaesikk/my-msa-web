import React from 'react';
import { 
  Typography,
} from '@material-ui/core';
const Copyright=()=>{
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{height:'23px'}}>
      {'Copyright © '}      
        Noah Eom
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  return (
    <div style={{backgroundColor: 'rgb(254,254,254)', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div>
      <Copyright />
      </div>
    </div>
  );
};

export default Footer;