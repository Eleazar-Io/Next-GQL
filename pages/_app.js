import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/client'
import ThemeProvider from '../components/theme'
import client from '../config/apollo/client'
import TopNav from '../components/TopNav';
import { Container } from '@mui/material';
import useStyles from './style'

function MyApp({ Component, pageProps }) {
  const style = useStyles()
  return(
    <ApolloProvider client={client}>
      <ThemeProvider>
        <TopNav></TopNav>
        <Container maxWidth="xl" className={style.container}>
          <Component {...pageProps}/>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp