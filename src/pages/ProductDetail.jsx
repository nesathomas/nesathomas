import {Box, Button, Breadcrumbs, Rating, Select, MenuItem, Typography} from "@mui/material";
import modelImage from '../assets/img_1.png'
import { Link } from "react-router-dom";
import ProductTabs from "./ProductTabs"
import "./ProductDetail.css"

function ProductDetail(){

    return(
        <>
        <Box>
            <div className="container">
            <div className="image-container">
            <img src={modelImage} alt=""></img>
            </div>
           
            <div className="content-container">
            <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Shop
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>

            <Typography variant="h3">Plain white shirt</Typography>
            <Rating name="read-only" value={5} readonly/>    
            <Typography variant="h4">Plain white shirt</Typography>
            <Typography variant="p">A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.
            </Typography>


            <Select
                labelId="Select Size"
                id="Select Size"
                // value={size}
                label="Select Size"
                // onChange={handleChange}
            >
                <MenuItem value={10}>X-Small XS</MenuItem>
                <MenuItem value={20}>Small S</MenuItem>
                <MenuItem value={30}>Medium M</MenuItem>
                <MenuItem value={40}>Large L</MenuItem>
                <MenuItem value={50}>X-Large XL</MenuItem>
            </Select> 

            <Button variant="contained">ADD TO CART</Button>
            <Typography VARIANT="P">Category: Women, Polo, Casual</Typography>
            <Typography VARIANT="P"> Tags: Modern, Design, cotton</Typography>


        </div>
        </div>
        </Box>
        
        <ProductTabs/>
        </> //this is fragment adding empty tags to avoid creating empty divs
    )
}

export default ProductDetail;