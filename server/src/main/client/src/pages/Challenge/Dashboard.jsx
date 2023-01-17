import React from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  Container,
  Table,
} from '@material-ui/core';
import Layout from '../../layout/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <p>This is Dashboard Page</p>
      <p>테이블 형태로 전체적인 표를 보여줄 것입니다.</p>
      <hr />
      <Container>
        <Grid>
          <Table>
            <Button>식이</Button>
            <Button>지돌</Button>
            <Button>동동</Button>
            <Button>종띵</Button>
            <Button>찌롱</Button>
          </Table>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Dashboard;