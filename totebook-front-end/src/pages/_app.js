/** @format */

import { Chakra } from "../lib/Chakra";
import "../styles/styles.css";
import NavBar from "../common/NavBar";
import Footer from "./home-components/Footer";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [posts, setPosts] = useState();
	const postData = (value) => {
		setPosts(value);
	};

	return (
		<Chakra cookies={pageProps.cookies}>
			<NavBar posts={posts} />
			<Component callBack={postData} {...pageProps} />
			<Footer />
		</Chakra>
	);
}

export default MyApp;

// export async function getServerSideProps() {
// 	const posts = "Hello World";
// 	return {
// 		props: {
// 			posts,
// 		},
// 	};
// }