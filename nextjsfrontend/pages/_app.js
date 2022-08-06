import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
        <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp;