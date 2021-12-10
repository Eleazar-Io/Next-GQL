import { Box } from "@mui/system"
import { AppBar, Typography, Toolbar, Button } from "@mui/material"
import Link from 'next/link'

export default function TopNav(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="primary" position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/"><a>Home</a></Link>
                </Typography>
                <Button color="inherit">
                    <Link href="/cart"><a>Cart</a></Link>
                </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}