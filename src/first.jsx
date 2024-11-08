import styled from 'styled-components';
import './first.css'
import { Button } from '@mui/material';


function Newfn(){

    const nesa=styled.div`color:purple;`

    return(
        <div className= "stylingForFirst" style={{background:"#b4a9b0",border:"1px solid grey", margin:"20px", padding:"200px"  }}>
        <nesa>THIS IS A STYLED COMPONENT </nesa>
        <button style={{background:"#ff33ae"}}>Click HERE for new JSX</button>
        <button style={{background:"#ff33ae"}}>Click HERE for second button</button>
        <button style={{background:"#ff33ae"}}>Click HERE for third button</button>
        <Button>This is a button from MUI</Button>
        <Button variant='text'>This is a MUI button - with variant text</Button>
        <Button variant='contained'>This is a MUI button - with variant contained</Button>
        <Button variant='outlined'>This is a MUI button - with variant outlined</Button>
        <Button style={{backgroundColor:"purple"}}variant='outlined'>This is a MUI button - with variant outlined</Button>

        </div>
    )
 }
  export default Newfn;

