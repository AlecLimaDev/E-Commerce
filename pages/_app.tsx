import { GlobalStyle } from "../styles/globalstyle";
import dynamic from "next/dynamic";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


const DynamicHeader = dynamic(() => import("./_app"), {
  ssr: false,
});