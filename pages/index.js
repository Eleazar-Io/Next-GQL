import {QUERY_CATEGORY} from '../config/apollo/Schema';
import Head from 'next/head'
import { useQuery } from "@apollo/client";
import Link from 'next/link'
import { List, ListItem, ListItemButton, ListItemText, Grid, Container, Backdrop, CircularProgress, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';import * as React from 'react';
import useStyles from './style';
import Load from '../components/load';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Home(props) {
    const router = useRouter()
    const { loading, error, data } = useQuery(QUERY_CATEGORY);

    const style = useStyles()

    if (loading) return <Load></Load>
    if (error) return <p>Error :(</p>;
    return(
        <>
            <Head>
                <title>Home Store</title>
            </Head>
            <div className={style.contentNav}>
                <Typography className={style.title}>Category</Typography>
            </div>
            <List>
                <Grid container spacing={3}>
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
        </>
    )
}