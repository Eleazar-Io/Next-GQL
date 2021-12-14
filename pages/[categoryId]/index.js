import { useRouter } from "next/router"
import Head from "next/head"
import Link from 'next/link'
import { List, Grid, ListItemText, ListItemButton, ListItem, Typography, Button} from '@mui/material'
import { useQuery } from "@apollo/client"
import {QUERY_CATEGORY} from "../../config/apollo/Schema"
import useStyles from "./style";
import Load from "../../components/load"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function CategoryDetail(){
    const router = useRouter()
    const { categoryId } = router.query
    const { loading, error, data } = useQuery(QUERY_CATEGORY,{
        variables: {
            categoryId: categoryId
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
            <div className={style.contentNav}>
                <Button onClick={()=>router.back()} className={style.backIcon} variant="text">
                    <ArrowBackIosNewIcon/>
                </Button>
                <Typography className={style.title}>{data.category.name}</Typography>
            </div>
            <List>
                <Grid container spacing={3}>
                {
                    data.category.children.map((res)=>(
                        <Grid item xs={4}>
                        <Link href="/[categoryId]/[subCategoryId]" as={`${router.query.categoryId}/${res.id}`}>
                            <ListItem key={res.id}  disablePadding>
                                <ListItemButton className={style.item}>
                                    <ListItemText primary={res.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        </Grid>
                    ))
                }
                </Grid>          
            </List>
        </>
    )
}