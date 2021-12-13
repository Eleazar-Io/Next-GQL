import { useRouter } from "next/router"
import Head from "next/head"
import Link from 'next/link'
import { List, Grid, ListItemText, ListItemButton, ListItem} from '@mui/material'
import { useQuery } from "@apollo/client"
import {QUERY_CATEGORY} from "../../config/apollo/Schema"
import useStyles from "./style";

export default function CategoryDetail(){
    const router = useRouter()
    const { categoryId } = router.query
    const { loading, error, data } = useQuery(QUERY_CATEGORY,{
        variables: {
            categoryId: categoryId
        }
    });

    const style = useStyles()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
        <>
            <Head>
                <title>{data.category.name}</title>
            </Head>

            <div className={style.container}>
                <List>
                    <Grid container>
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
            </div>
        </>
    )
}