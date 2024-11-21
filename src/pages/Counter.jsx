import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import ReactDOM from "react-dom"


function Counter(){

    const [count,setCount]=useState(0); 
    const [loading,setLoading]=useState(false);
    const [alertState,setAlertState]=useState(false);

    //use effect - mounting 
    useEffect(()=> {
        console.log("Component loaded")
    }, [])

    //use effect - updation - when update happens show loader for two seconds
    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        console.log("Component updated")
    }, [count])

    
    //use effect - unmounting     
    useEffect(()=> {
        return() => {
            alert("You are leaving this page")
            console.log("Component unmounted")
        };
    }, []);

    


    const handleIncrement = ()=> {
        console.log("before increment",count)
        setCount(count+1);
        console.log("after increment",count)
    }

    const handleDecrement = ()=> {
        console.log("before decrement",count)
        setCount(count-1);
        console.log("after decrement",count)
    }


    if(count>4){
        throw new Error ("this is custom error to check error boundary")
    }


    function AlertUser(){
        function handleClick(){
            setAlertState(false)
        }
        const warning = 
        <div style={{  
            padding:"150px",
            top: 0,
            right: 0,
            display: "flex",
            left: 0,
            bottom: 0,
            position: "fixed",
            justifyContent: "center",
            backgroundColor: "rgb(0,0,0,0.5)",
           // opacity: 0.5,
            alignItems: "center",
        }}>
            <div style={{backgroundColor:"white"}}> 
            Headsup, Alert coming up... 
            <button onClick={handleClick}>OK</button>
            </div>
        </div>
        return ReactDOM.createPortal(warning,document.getElementById("warning"))
    } 


    return(
        <Container minWidth={"lg"} style={{display:'flex', 
        justifyContent:'center', alignItems:'center', 
        gap:'30px', margin:'50px' }} >
          

            <Button variant="outlined" onClick={handleDecrement}>-</Button>
            
            {/* //if loading is true show circular progress, else show count number */}
            {loading ? <CircularProgress/> : <Typography>{count}</Typography>}


        {count>1 ?<AlertUser/> : ''}


            <Button variant='contained' onClick={handleIncrement}>+</Button>
        <div></div>
         <div></div>
        <div></div>
        <div>  <p>counter component</p> </div>

        </Container>
    )
}

export default Counter;