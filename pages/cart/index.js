import { useLayoutEffect, useState, useEffect } from "react";
import { Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Link } from "@mui/material"
import Head from "next/head";

export default function Cart(){
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        let cart = sessionStorage.getItem('cart')
        if (cart === null){
            setCarts([]);
        }
        else {
            let result = JSON.parse(cart)
            setCarts(result);
        }
    },[])
    const removeFromCart = ()=> {
        
    }

    console.log(carts);
    return(
        <>
        <Head><title>Cart</title></Head>
            {
                carts.map((res)=>(
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="300"
                        image={res.image.url}
                        alt={res.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {res.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {res.price_range.minimum_price.regular_price.currency} {res.price_range.minimum_price.regular_price.value}<br/>
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={removeFromCart} size="small" color="primary">
                                Remove from Cart
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    )
}