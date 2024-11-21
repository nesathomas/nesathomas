import { Box, Typography } from "@mui/material";
//import Box from '@mui/material/Box';

function Footer() {
    return(
        <Box backgroundColor="#FBFBFB" color="#1D1D1D" variant="h6" display="flex" justifyContent="space-between" paddingTop={"50px"}>
            <Box>
                <Typography>COMPANY INFO</Typography>
                <p>About Us</p>
                <p>Latest Posts</p>
                <p>Contact Us</p>
                <p>Shop</p>
            </Box>
            
            <Box>
                <Typography>HELP LINKS</Typography>
                <p>Tracking</p>
                <p>Order Status</p>
                <p>Delivery</p>
                <p>Shipping Info</p>
                <p>FAQ</p>
            </Box>

            <Box>
                <Typography>USEFUL LINKS</Typography>
                <p>Special Offers</p>
                <p>Gift Cards</p>
                <p>Advertising</p>
                <p>Terms of Use</p>
            </Box>

            <Box>
                <Typography>GET IN THE KNOW</Typography>
                <p>Enter email</p>

            </Box>
        
        
        </Box>

    )
}


export default Footer;