import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import Layout from '../../layout/Layout';
import Calendar from '../../components/calendar/Calendar';

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
      <Grid>
        <h2>This is My Calendar</h2>
        <Calendar />
      </Grid>
    </Layout>
  );
};

export default Home;