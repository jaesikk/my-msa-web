import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import Layout from '../../layout/Layout';

const Confirm = () => {
  return (
    <Layout>
      <Paper style = {{padding : '15px', marginTop : '30px'}}>
        <p>오늘은 2023/01/18 입니다.</p>
        <p>오늘자 현황</p>
        <p>참여자 : 4명</p>
        <p>완수자 : 3명</p>
        <p>진행자 : 1명</p>
      </Paper>
      <Grid>
        <Link to = "/dashboard" > Dashboard </Link>
        <span> || </span>
        <Link to = "/home" > Home </Link>
      </Grid>
    </Layout>
  );
};

export default Confirm;