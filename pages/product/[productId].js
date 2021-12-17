import Head from "next/head"
import { QUERY_PRODUCT } from "../../config/apollo/Schema"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { Typography, Button, Snackbar, Alert, Grid, Divider } from "@mui/material"
import { useState, useEffect } from "react"
import Load from "../../components/load"
import ContentNav from "../../components/ContentNav"
import useStyles from './style'

const Product = ()=> {
    const router = useRouter()
    const style = useStyles()
    const [open, setOpen] = useState(false)
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        let cart = localStorage.getItem('cart')
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
            localStorage.setItem('cart', toCartItem)
        }
        else {
            let savedCart = carts
            savedCart.push(res)
            let toCartItem = JSON.stringify(savedCart)
            localStorage.setItem('cart', toCartItem)
        }
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //   return;
        // }
        setOpen(false);
      };

    const { productId } = router.query
    const { loading, error, data } = useQuery(QUERY_PRODUCT,{
        variables: {
            urlKey: productId
        }
    });
    if (loading) return <Load></Load>
    if (error) return <p>Error</p>;
    const res = data.products.items[0]
    const price = res.price_range.minimum_price.regular_price

    return(
        <>
            <Head><title>{res.name}</title></Head>
            <ContentNav
                title={res.name}
            />
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <img width={400} src={res.image.url}/>
                </Grid>
                <Grid item md={5}>
                    <Typography className={style.title} variant="h6">{res.name}</Typography>
                    <Typography className={style.price} variant="h5">{price.currency} {price.value}</Typography>
                    <Divider/>
                    <Typography className={style.infoTitle}>Item Info</Typography>
                    <Typography className={style.info} dangerouslySetInnerHTML={{__html: res.description.html}}></Typography>
                </Grid>
                <Grid item md={2}>
                    <Button className={style.toCartBtn} onClick={addToCart} size="large" disableElevation variant="contained" color="secondary">
                        + Add to Cart
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Added to Cart!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Product