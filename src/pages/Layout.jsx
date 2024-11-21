import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "@mui/material";
import fallbackimage from '../assets/fallbackimage.jpeg'
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Counter from "./Counter";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import ProductDetail2 from "./ProductDetail2";
import { ErrorBoundary } from "react-error-boundary";
import Shop from "./Shop";
import Cart from "./Cart";

const FallbackComponent=({error})=>{
    return(
        <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <img src={fallbackimage} alt=""></img>
        </div>
    )
}

function Layout(){
    return(
        <div>
            <Header/>
        
            <Container maxWidth="sm">
            
            <Routes> 
            
            <Route path="/home" element={<Home/>}>
                <Route path="Shop" element={<Shop/>}> 
                </Route>
            </Route>

            <Route path="/About" element={<About/>}>
            </Route>
            
            <Route path="/ContactUs" element={<ContactUs/>}>
            </Route>

            <Route path="/Counter" element={
                <ErrorBoundary FallbackComponent={FallbackComponent}>
                <Counter/>
                </ErrorBoundary>
            }>
            </Route>
                
            <Route path="/ProductDetail" element={<ProductDetail/>}>
            </Route>

            <Route path="/ProductDetail2" element={<ProductDetail2/>}>
            </Route>

            <Route path="/Cart" element={<Cart/>}> 
            </Route>


            </Routes>
            </Container>

            <Container maxWidth={"xl"} sx={{minHeight:"80vh"
            }}>
           
            </Container>    

            
            <Footer/>
            
        </div>
    );
}

export default Layout;