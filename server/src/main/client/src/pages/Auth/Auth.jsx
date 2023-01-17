import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import {
  Paper,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';

const Auth = () => {
  //input에서 value를 담기 위한 state 생성
  const [account, setAccount] = useState({
    id: "",
    pw: "",
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.id]: e.target.value,
    });
  };

  const signUpApi= (account)=> {
    console.log("signUpApi operated",account)
    axios.post('/api/user', account)
    .then(res => {
      // setCards(res.data)
      console.log(res.data, '@@@@signUpApi Success')
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <Layout>
      회원가입 페이지입니다. Join Us, Plz 😊
      <Paper>
        <form method="post"
              onSubmit={(e)=> {
            // 1. submit 할 때 타입이나 변수명, 그리고 body request param 고려해보자
            // 2. 자바에서 빌드할때 왜 적용 안되는지
            e.preventDefault();
            console.log('post form operated!!');
            console.log('Account : ', account)
            signUpApi(account);
          }}>
          <Grid>
            <TextField label={'ID'} id="id" margin="normal" onChange={onChangeAccount} />
            <TextField label={'PW'} id="pw" margin="normal" onChange={onChangeAccount}/>
            <Button type="submit">Login</Button>
          </Grid>
        </form>
      </Paper>
    </Layout>
  );
};

export default Auth;