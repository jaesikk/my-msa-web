import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Layout from '../../layout/Layout';

const Challenge = () => {
  return (
    <Layout>
      <p>challenge 페이지 입니다.</p>
      <p>아직 기능 구현 미완입니다.</p>
      <Link to="/dashboard">
        <p>챌린지 대쉬보드</p>
      </Link>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Push-Up Challenge</FormLabel>
        <Grid>
          <Button>식이</Button>
          <Button>지돌</Button>
          <Button>종띵</Button>
          <Button>동동</Button>
          <Button>찌롱</Button>
        </Grid>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
        <Grid>
          <TextField type="text" id="filled-basic" label="name" variant="filled" style={{padding : '5px'}}/>
          <TextField type="text" id="filled-basic" label="date" variant="filled" style={{padding : '5px'}}/>
        </Grid>
          <FormControlLabel value="female" control={<Radio />} label="했다." />
          <FormControlLabel value="male" control={<Radio />} label="할거다." />
        </RadioGroup>
        <Button>확인</Button>
      </FormControl>
      <hr />
      <p>[확인] 버튼 클릭시 전환될 화면입니다.</p>
      <Paper style = {{padding : '15px', marginTop : '30px'}}>
        <p>오늘은 2023/01/18 입니다.</p>
        <p>오늘자 현황</p>
        <p>참여자 : 4명</p>
        <p>완수자 : 3명</p>
        <p>진행자 : 1명</p>
      </Paper>
    </Layout>
  );
};

export default Challenge;