import { Box, Breadcrumbs, Button, MenuItem, Rating, Select, Typography } from "@mui/material";
import modelImage from '../assets/model.png'
import { Link } from "react-router-dom";
// import { useState } from "react";
import ProductTabs from "./ProductTabs";
import './ProductDetail2.css'
// import { Fragment } from "react";


function ProductDetail2() {

    return (
        <Box className="product-detail-container">

            <div className="product-image">
                <img src={modelImage}></img>
                <div className="discount-tag">-24%</div>
            </div>

            <div className="product-info">
            <Typography  variant="h3">Plain T Shirt</Typography>
            <Rating className="ratings" name="read-only" value={5} readOnly />

            <Breadcrumbs className="breadcrumb" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/">
                    Core
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>
            <Typography variant="h4">$69.00 $49.00</Typography>
            <Typography className="description" variant="p">A classic t-shirt never goes out of style. This is our most premium collection of shirt.
                This plain white shirt is made up of pure cotton and has a premium finish.</Typography>

            <Select className="size-selector"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Small S</MenuItem>
                <MenuItem value={20}>Medium M</MenuItem>
                <MenuItem value={30}>Large L</MenuItem>
                <MenuItem value={30}>Extra Large XL</MenuItem>

            </Select>
            <Button className="add-to-cart" variant="contained">ADD TO CART</Button>
            <Typography className="product-meta" variant="p">
                Category: Men, Polo, Casual
                Tags: Modern, Design, cotton
            </Typography>
                    <Select className="size-selector"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder="Select Size">

                        <MenuItem value={10}>Small S</MenuItem>
                        <MenuItem value={20}>Medium M</MenuItem>
                        <MenuItem value={30}>Large L</MenuItem>
                        <MenuItem value={30}>Extra Large XL</MenuItem>

                    </Select>
                    <Button className="add-to-cart" variant="contained">ADD TO CART</Button>
                    <Typography className="product-meta" variant="p">
                        Category: Men, Polo, Casual
                    </Typography>

            <ProductTabs/>
          
           </div>
        </Box>
    )
}
export default ProductDetail2;