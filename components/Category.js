import {QUERY_CATEGORY} from '../config/apollo/Schema';
import { useQuery } from "@apollo/client";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';

function Category(){
    const router = useRouter()
    const { loading, error, data } = useQuery(QUERY_CATEGORY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return data.category.children.map((res)=>(
        <>
        <Card key={res.id} sx={{ maxWidth: 345 }}>
        <Link href="/[categoryId]" as={`/${res.id}`}>
            <a>
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
                <Button color="secondary" size="small">Details</Button>
            </CardActions>
            </a>
        </Link>
        </Card>
        </>
    ))
}

export default Category