import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/client'
import ThemeProvider from '../components/theme'
import client from '../config/apollo/client'
import TopNav from '../components/TopNav';

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <ThemeProvider>
        <TopNav></TopNav> 
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp