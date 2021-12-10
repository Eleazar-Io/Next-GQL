import Head from "next/head"
import { QUERY_PRODUCT } from "../../../config/apollo/Schema"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from "@mui/material"
import { useState, useEffect } from "react"

const Product = ()=> {
    const router = useRouter()
    
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
    const addToCart = ()=> {
        if(carts.length === 0){
            let product = [res]
            let toCartItem = JSON.stringify(product)
            sessionStorage.setItem('cart', toCartItem)
        }
        else {
            let savedCart = carts
            savedCart.push(res)
            let toCartItem = JSON.stringify(savedCart)
            sessionStorage.setItem('cart', toCartItem)
        }
    }
    const { productId } = router.query
    const { loading, error, data } = useQuery(QUERY_PRODUCT,{
        variables: {
            urlKey: productId
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    const res = data.products.items[0]
    const price = res.price_range.minimum_price.regular_price

    return(
        <>
            <Head><title>{res.name}</title></Head>
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
                    Price: {price.currency} {price.value}<br/>
                    Description: <br/>
                    <div dangerouslySetInnerHTML={{__html: res.description.html}}></div>
                </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={addToCart} size="small" color="primary">
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Product