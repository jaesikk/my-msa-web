import React from 'react';
import Layout from '../../layout/Layout';
import {
  Paper,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const Auth = () => {
  return (
    <Layout>
      회원가입 페이지입니다. Join Us, Plz 😊
      <Paper>
        <form method="post">
          <Grid>
            <TextField label={'ID'} id="ID" margin="normal" />
            <TextField label={'PW'} id="PW" margin="normal" />
            <Button type="submit">Login</Button>
          </Grid>
        </form>
      </Paper>
    </Layout>
  );
};

export default Auth;