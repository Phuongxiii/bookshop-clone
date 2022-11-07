/** @format */

import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
	return (
		<Box
			w='50%'
			fontSize='16px'
			color='#87bfcc'
			whiteSpace='8px'
			fontWeight='700'>
			<Text color='white'>CONTACT US</Text>
			<Link href='mailto:khongbietdau1331@gmail.com'>
				HELLO@STUDIONEAT.COM
			</Link>
			<Text>PHONE: (512) 333-1570</Text>
			<Box h='16px' />
			<Text>P.O. BOX 90723</Text>
			<Text>AUSTIN, TX 78709-0723</Text>
			<Text>USA</Text>
		</Box>
	);
}
