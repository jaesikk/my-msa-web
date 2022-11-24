import React from 'react';
import {
  Paper,
  Grid,
  AppBar,
  Button,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const HideOnScroll=(props)=>{
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = props => {

  return (
    <HideOnScroll {...props}>
    <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', marginTop:10}}>
    {/* <AppBar position="relative" color="secondary"> */}
      <Grid container justify="space-around" alignItems="center">
        <Grid item style={{marginRight:200}}>
          <Link to = "/home" > 
          <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/>
          </Link>
        </Grid>
        <Grid item>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button>
                서치
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <Link to = "/auth" >회원</Link>       
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  </HideOnScroll>
  );
};

export default Header;
