import React, { useState } from 'react';
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
  const [name, setName] = useState("");

  const handleUserName = (e) => {
    e.preventDefault();
    console.log("---------------------------------------handle clicked!",e.target.id )
    setName(e.target.id);
    console.log("@@ console  = = = = > > > name :: ",name);
  }

  const onChangeName=(e)=>{
    console.log(e.target.value);
    console.log("@@@ name state 확인 ::", name)
  }

  const handleConfirm=()=>{
    console.log("confirm test");
    window.location.href = "/Confirm"
  }
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
            <Button onClick={handleUserName}> <span id="식이" >식이</span></Button>
            <Button onClick={handleUserName}><span id="지돌" >지돌</span></Button>
            <Button onClick={handleUserName}><span id="종띵" >종띵</span></Button>
            <Button onClick={handleUserName}><span id="동동" >동동</span></Button>
            <Button onClick={handleUserName}><span id="찌롱" >찌롱</span></Button>
          </Grid>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
          <Grid>
            <TextField type="text" id="name" label="name" variant="filled" onChange={onChangeName} value={name} style={{padding : '5px'}}/>
            <TextField type="text" id="date" label="date" variant="filled" style={{padding : '5px'}}/>
          </Grid>
            <FormControlLabel value="female" control={<Radio />} label="했다." />
            <FormControlLabel value="male" control={<Radio />} label="할거다." />
          </RadioGroup>
          <Button type="submit" onClick={handleConfirm}>확인</Button>
        </FormControl>
    </Layout>
  );
};

export default Challenge;