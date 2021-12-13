import {QUERY_CATEGORY} from '../config/apollo/Schema';
import Head from 'next/head'
import { useQuery } from "@apollo/client";
import Link from 'next/link'
import { List, ListItem, ListItemButton, ListItemText, Grid } from '@mui/material';
import { useRouter } from 'next/router';import * as React from 'react';
import useStyles from './style';

export default function Home(props) {
    const router = useRouter()
    const { loading, error, data } = useQuery(QUERY_CATEGORY);

    const style = useStyles()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
        <>
            <Head>
                <title>Home Store</title>
            </Head>
            <div className={style.container}>
                <List>
                    <Grid container>
                    {
                        data.category.children.map((res)=>(
                            <Grid item xs={4}>
                            <Link href="/[categoryId]" as={`/${res.id}`}>
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