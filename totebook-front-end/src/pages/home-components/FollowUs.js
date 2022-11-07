/** @format */

import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function FollowUs() {
	return (
		<Box
			w='30%'
			fontSize='16px'
			color='#87bfcc'
			whiteSpace='8px'
			fontWeight='700'>
			<Text color='white'>FOLLOW US</Text>
			<br />
			<Link href='/'>TWITTER</Link>
			<br />
			<Link href='/'>INSTAGRAM</Link>
			<br />
			<Link href='/'>BLOG</Link>
			<br />
			<Link href='/'>PODCAST</Link>
		</Box>
	);
}
