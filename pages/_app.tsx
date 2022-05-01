import "../styles/globals.scss";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import type { AppProps } from "next/app";
import { ManagerProvider } from "../contexts/manager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagerProvider>
      <Component {...pageProps} />
    </ManagerProvider>
  );
}

export default MyApp;
