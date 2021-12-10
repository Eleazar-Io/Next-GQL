import TopNav from "../../components/TopNav"
import { useRouter } from "next/router"
import Head from "next/head"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import {CardActionArea} from '@mui/material'
import { useQuery } from "@apollo/client"
import {QUERY_CATEGORY} from "../../config/apollo/Schema"

export default function CategoryDetail(){
    const router = useRouter()
    const { categoryId } = router.query
    const { loading, error, data } = useQuery(QUERY_CATEGORY,{
        variables: {
            categoryId: categoryId
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
                    data.category.children.map((res)=>(
                        <Link href="/[categoryId]/[subCategoryId]" as={`${router.query.categoryId}/${res.id}`}>
                            <a>
                            <Card key={res.id} sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    height="140"
                                    image="https://cdn.pixabay.com/photo/2018/12/24/16/53/shop-icon-3893222_960_720.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {res.name}
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