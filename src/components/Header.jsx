import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import MailIcon from '@mui/icons-material/Mail';




export default function Header() {

const navigate=useNavigate();

function handleClick(){
  
    navigate("/cart")
}  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
         
          <Typography variant="h6" component="div">
          NorthStar
          </Typography>

          <Box sx={{display: "flex", alignItems: "center",  gap: "20px"}}>

          <Link to="/Home">
          <Button color="inherit">HOME</Button>
          </Link>

          <Link to="/About">
          <Button color="inherit">ABOUT</Button>
          </Link>

          <Link to="/ContactUs">
          <Button color="inherit">CONTACT US</Button>
          </Link>

          </Box>

          <Box sx={{display: "flex", alignItems: "center",  gap: "20px"}}>

          <PersonOutlineOutlinedIcon/>

          <Badge badgeContent={10} color="primary">
            <LocalMallOutlinedIcon color="black" onClick={handleClick}/>
            </Badge>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          </Box>




        </Toolbar>
      </AppBar>
    </Box>
  );
}
