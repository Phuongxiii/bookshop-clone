/** @format */

import { Chakra } from "../lib/Chakra";
import "../styles/styles.css";
import NavBar from "../common/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<NavBar />
			<Component {...pageProps} />
		</Chakra>
	);
}

export default MyApp;
