import './App.css';
import Pho from './Pho';
import {Typography,AppBar,Toolbar,Container, ImageList, ImageListItem, TextField, Button} from "@mui/material";
import Image from "./Image.json"
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import React,{useState} from 'react'
import axios from "axios"
function App() {
  const [data,setData]=useState({
    name:"",
    email:"",
    purpose:"",
    address:""
})
function Text(e){
    setData({...data,[e.target.name]:e.target.value})
}
function handler(){
  try {
    axios.post("http://localhost:8000/adding",data).then((res)=>
    alert(res.data)).catch((err)=>{
           console.log(err)
    })
}
   catch (error) {
    console.log(error)
  }}
   
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <CameraAltIcon/>
        <Typography variant='h5'>Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant="h3">Latest version of Photography</Typography>
        <Typography variant="p">pleasure to take your photos as well,Fill the below form for any invite request</Typography>
      </Container>
      <Container>
        <ImageList  height={100}  cols={3}>
          {Image.map(item=>
          <ImageListItem  key={item.id}><img src={item.img} alt={item.name}></img></ImageListItem>
            )}
          
        </ImageList>
      </Container>
      <center>
      <Container>
        <Typography variant="h3">Contact Form</Typography>
        <form>
        <TextField onChange={Text} name="name" style={{"width":"500px","margin":"5px"}}type="text" label="Name" variant='outlined'></TextField><br/>
      <TextField  onChange={Text} name="email" style={{"width":"500px","margin":"5px"}}type="Email" label="Email" variant='outlined'></TextField><br/>
      <TextField  onChange={Text} name="purpose" style={{"width":"500px","margin":"5px"}}type="text" label="Purpose" variant='outlined'></TextField><br/>
      <TextField  onChange={Text} name="address" style={{"width":"500px","margin":"5px"}}type="text" label="Address" variant='outlined'></TextField><br/>
      <Button variant="contained" onClick={handler} >Submit</Button>
        </form>
      
      </Container>
      </center> 
    </div>
  );
}

export default App;
