import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/amterial?/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

//comment 
export default function CreateService() {
    const [prompt, setPrompt] = React.useState({});
  
    //triggers post request /api/services to backend 
    const postPrompt = async()=>{
      console.log("prompt: ", prompt);
      const resp = await axios({
        method: 'post', 
        url: 'http://localhost:8000/prompt/',
        data: prompt
      });
      console.log("resp: ",resp);
    }; 

  return (
      <>
        <h2>Create Prompt</h2>
        <form  noValidate autoComplete="off">
          <div>
            <TextField 
            id="outlined-basic" label="prompt" variant="outlined" size="small" 
            onChange={(event)=> {setPrompt({...prompt, prompt: event.target.value})}} />
          </div>
          <Button variant="contained" color="primary"
            onClick={postPrompt}>
              Tell me, Grandpa!
          </Button>
        </form>
      </>
    );
  }