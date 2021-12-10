import TopNav from "../../../components/TopNav"
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
import { CardActionArea } from "@mui/material";
import {QUERY_SUBCATEGORY} from "../../../config/apollo/Schema"

export default function subCategory(){
    const router = useRouter()
    const { subCategoryId, categoryId } = router.query
    const { loading, error, data } = useQuery(QUERY_SUBCATEGORY,{
        variables: {
            categoryId: subCategoryId
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
        <>
            <Head>
                <title>{data.category.name}</title>
            </Head>
                {
                    data.category.products.items.map((res)=>(
                        <Link href="/[categoryId]/[subCategoryId]/[productId]" as={`/${categoryId}/${subCategoryId}/${res.url_key}`}>
                            <a>
                                <Card key={res.id} sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt=""
                                        height="140"
                                        image={res.image.url}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {res.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: {res.price_range.minimum_price.regular_price.currency} {res.price_range.minimum_price.regular_price.value}
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small">Details</Button>
                                    </CardActions>
                                </Card>
                            </a>
                        </Link>
                    ))
                }
        </>
    )
}