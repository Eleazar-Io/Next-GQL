import Head from 'next/head'
import styles from '../styles/Home.module.css'

import * as React from 'react';
import ThemeProvider from '../components/theme'
import Category from '../components/Category';
import TopNav from '../components/TopNav';
import { bgcolor } from '@mui/system';

export default function Home(props) {
    return (
        <>
        <Head>
            <title >Home Store</title>
        </Head>           
        <Category></Category>      
        </>        
  )
}