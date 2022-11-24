import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Grid,
  AppBar,
  Button,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
import Layout from '../../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Grid>
        <h1>홈페이지입니다.</h1>

        <Paper>
          <Link to ="/home">
            <p>홈페이지</p>
          </Link>
          <Link to="/visit">
            <p>방명록</p>
          </Link>
          <Link to="/shop">
            <p>상점</p>
          </Link>
        </Paper>  
      </Grid>
    </Layout>
  );
};

export default Home;