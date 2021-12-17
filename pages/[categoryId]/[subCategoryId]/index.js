import { useRouter } from "next/router"
import Head from "next/head"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useQuery } from "@apollo/client"
import { CardActionArea, List, Grid } from "@mui/material";
import {QUERY_SUBCATEGORY} from "../../../config/apollo/Schema"
import Load from "../../../components/load";
import useStyles from "./style";
import ContentNav from "../../../components/ContentNav";

export default function subCategory(){
    const router = useRouter()
    const { subCategoryId, categoryId } = router.query
    const { loading, error, data } = useQuery(QUERY_SUBCATEGORY,{
        variables: {
            categoryId: subCategoryId
        }
    });

    const style = useStyles()

    if (loading) return <Load></Load>
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
        <>
            <Head>
                <title>{data.category.name}</title>
            </Head>
            <ContentNav
                title={data.category.name}
            />
            <Grid container spacing={3}>
            {
                data.category.products.items.map((res)=>(
                    <Grid item xs={2}>
                        <Card elevation={0} className={style.cardItemBox} key={res.id} sx={{ maxWidth: 345 }}>
                            <Link href="/product/[productId]" as={`/product/${res.url_key}`}>
                                <a>
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
                                </a>
                            </Link>
                        </Card>
                    </Grid>
                ))
            }
            </Grid>
        </>
    )
}