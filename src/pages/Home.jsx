import { Button} from "@mui/material";
import {Link} from "react-router-dom";



function Home(){
    console.log("This is home page");

    return (
    <div>
        <Link to="/Shop">
        <Button variant="contained">Lets go Shopping!!!</Button>
        </Link>
    </div> 

    )

}

export default Home;