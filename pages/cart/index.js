import { useLayoutEffect, useState, useEffect } from "react";
import { Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Link, Grid } from "@mui/material"
import Head from "next/head";
import useStyles from "./style";

export default function Cart(){
    const [carts, setCarts] = useState([])
    const [isRemove, setIsRemove] = useState(false)
    const style = useStyles()
    useEffect(()=>{
        let cart = localStorage.getItem('cart')
        if (cart === null){
            setCarts([]);
        }
        else {
            let result = JSON.parse(cart)
            setCarts(result);
        }
    },[isRemove])

    const removeFromCart = (urlKey)=> {
        let index = carts.findIndex(({url_key})=>url_key === urlKey)
        carts.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(carts))
        setIsRemove(!isRemove)
    }

    console.log(carts.length);

    return(
        <>
        <Head><title>Cart</title></Head>
        <Grid container spacing={3}>

            {
                carts.map((res)=>(carts.length==0)?(<h1>kosong</h1>):(

                    <Grid item xs={2}>
                        <Card elevation={0} className={style.cardItemBox} key={res.id} sx={{ maxWidth: 345 }}>
                            {/* <Link href="/product/[productId]" as={`/product/${res.url_key}`}>
                                <a> */}
                                    <CardActionArea className={style.cardItem} >
                                        <CardMedia
                                            component="img"
                                            alt=""
                                            height="240"
                                            image={res.image.url}
                                        />
                                        <CardContent>
                                            <Typography className={style.itemTitle} variant="body2" component="p">
                                                {res.name}
                                            </Typography>
                                            <Typography className={style.itemPrice} variant="body2" component="p">
                                                Price: {res.price_range.minimum_price.regular_price.currency}
                                                {res.price_range.minimum_price.regular_price.value}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <Button className={style.removeBtn} onClick={()=>removeFromCart(res.url_key)} disableElevation variant="contained" size="small" color="secondary">
                                        Remove from Cart
                                    </Button>
                                {/* </a>
                            </Link> */}
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
        </>
    )
}