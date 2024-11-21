// import { useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from "react-router-dom"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import { Table, TableCell, TableHead, TableRow, TableBody, TextField, Typography, Divider, Box, Breadcrumbs, Button } from "@mui/material";
function Cart(){

    let productData = {
        id:1,
        name:"Plain white shirt",
        price: 59.00,
        quantity:1
    }

    let productData2={
        id:2,
        name:"Plain black shirt",
        price: 69.00,
        quantity:1
    }
    
    let data =[productData, productData2, {
        id:3,
        name:"Plain blue shirt",
        price: 79.00,
        shippingfee: 10,
        quantity:1
    }] 

    const[tableData,setTableData]=useState(data);

    // function calculateTotal(){
    //     const total= tableData.reduce((acc,item)=>acc+item.price*item.quantity,0)
    //     setTotalAmount(total)
    // }

    
    // The above code is replaced as below 

    function calculateTotal(data) {
        return data.reduce((acc, item) => acc+ item.price *item.quantity,0)
    }


    const[totalAmount, setTotalAmount]=useState(tableData.reduce((acc,item)=>acc+item.price*item.quantity,0))

    
    // function handleQuantityChange(id,quantity){

    //     console.log("handle change called")
    //     data = tableData.map(product=> product.id===id?{...product,quantity:quantity}:product)
    //     console.log(data)
    //     setTableData(data)
    //     calculateTotal();
    // }

    // The above code is replaced as below 

    function handleQuantityChange(id,quantity){
        setTableData((prevData)=>{
            const updatedData = prevData.map(product =>
                product.id === id? {...product,quantity: Number(quantity)} : product
            );
            setTotalAmount(calculateTotal(updatedData));
            return updatedData;
        });
    }



    return (
        <div>

        <Breadcrumbs>
        <Link to="/Home">
        Home
        </Link>
        <Link to="/Cart">
        Shopping Cart
        </Link>
        </Breadcrumbs>


        <Table>
            <TableHead>
                <TableCell>
                    Product
                </TableCell>
                <TableCell>
                    Price
                </TableCell>
                <TableCell>
                    Quantity
                </TableCell>
                <TableCell>
                    Total
                </TableCell>
            </TableHead>  

            <TableBody>
              {tableData.map((product)=>{
                return
                <TableRow key={product.name}>
                    <TableCell> 
                        {product.name}
                    </TableCell>
                    <TableCell>
                        ${product.price}
                    </TableCell>
                    <TableCell>
                        <TextField onChange={(e)=>handleQuantityChange(product.id,e.target.value)} sx={{textAlign:"center"}} value={product.quantity}> </TextField>
                    </TableCell>
                    <TableCell>
                        ${product.price*product.quantity}
                    </TableCell>
                    <TableCell>
                        <Button variant="outlined" color="error">
                            <DeleteIcon color="error"/>
                        </Button>
                    </TableCell>


                </TableRow>
                })}
            </TableBody>

            


{/* 
Homework - code to perform DELETE Function 
Add shipping fee for 
*/}

        


        </Table>      
            


    <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"16px",
        width:"40%",
        marginTop:"30px"
    }}>
    
    <Typography variant = "h3">
        Cart Totals
    </Typography>
    
    <Box sx={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <Typography variant = "p">
            subtotal
        </Typography>
        <Typography variant = "p">
            ${totalAmount}
        </Typography>
    </Box>
    
    <Divider/>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <Typography variant = "p">
            shipping fee
        </Typography>
        <Typography variant = "p">
            FREE
        </Typography>
    </Box>
    <Divider/>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <Typography variant = "p">
            Total
        </Typography>
        <Typography variant = "p">
            $390.00 
        </Typography>
    </Box>

    <Button variant="contained" sx={{width:"fit-content", backgroundColor:"#D6763C"}}>
        PROCEED TO CHECKOUT
    </Button>
    </Box>
            
        </div>

    )
    

//    const data = useSelector(state => state.carts.productData)



    function calculateTotal(data) {
        return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}


export default Cart;