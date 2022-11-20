import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Paper,
  Grid,
  Box,
  AppBar,
  Button,
  useScrollTrigger,
  TextField,
  Slide,
} from '@material-ui/core';
import axios from 'axios';

const Visit = () => {
  const [lst, setLst] = useState('');
  const [userid, setUserId] = useState('');
  const [comment, setComment] = useState('');
  useEffect(()=>{
    getApi();
  }, []);

  const requestApi= (body)=> {
    console.log("requestApi operated")
    axios.post('/api/visitor', body)
    .then(res => {
      // setCards(res.data)
      console.log(res.data, '@@@@requestAPI')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const getApi = ()=> {
    axios.get('/api/visitor')
    .then(res => {
      setLst(res.data);
      console.log(res.data, '@@@@getAPI')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Grid>
      <h1>이곳은 방명록입니다.</h1>
      <Link to = "/home"> 홈페이지</Link>
      <Grid>
        <form onSubmit={(e)=> {
          // 1. submit 할 때 타입이나 변수명, 그리고 body request param 고려해보자
          // 2. 자바에서 빌드할때 왜 적용 안되는지
          e.preventDefault();
          let body = {
            userid:userid,
            comment: comment
          }
          requestApi(body);
        }}>
          <TextField onChange={(e)=>{setUserId(e.target.value)}} id="filled-basic" label="name" variant="filled" />
          <TextField onChange={(e)=>{setComment(e.target.value)}} id="filled-basic" label="comment" variant="filled" />
          <Button type="submit">확인</Button>
        </form>
      </Grid>
      <hr />
      <Grid>
        <p>{lst[0].userId}</p>
        <p>{lst[0].comment}</p>
        <p>{lst[0].logDate}</p>
        {/* {lst.map((row) => (
          <Grid key = {row}>
            <Paper>
              <p>{row.userId}</p>
              <p>{row.comment}</p>
              <p>{row.logDate}</p>
            </Paper>
          </Grid>
        ))} */}
      </Grid>
      <hr />
      <h2> 아직 DB에 연결중입니다. 기다려주세요😀</h2>
    </Grid>
  );
};



export default Visit;