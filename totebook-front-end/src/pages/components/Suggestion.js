/** @format */

import { Box, Center, Heading, List } from "@chakra-ui/react";
import React from "react";
import ProductItem from "../home-components/ProductItem";

export default function Suggestion() {
	const products = [
		{
			image: "https://cdn.shopify.com/s/files/1/0057/8492/products/3-Refills_large.jpg?v=1560370911",
			name: "INK REFILLS",
			title: "For Mark One or Mark Two",
		},
		{
			image: "https://cdn.shopify.com/s/files/1/0057/8492/products/Top-CoverDetail_grande_6d0c6393-0006-43d8-983c-88c4a9008f02_large.jpg?v=1511283111",
			name: "PANOBOOK",
			title: "A Notebook for Your Desk",
		},
		{
			image: "https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/Overview_Front%20sm.jpg?v=113060019566633222741627318759",
			name: "TOTEBOOK",
			title: "A Notebook to Take With You",
		},
	];
	return (
		<Box p={8}>
			<Heading
				textAlign='center'
				fontFamily='Comic Neue, cursive'
				fontSize='28px'
				fontWeight='500'>
				Also check out...
			</Heading>
			<Box h='24px' />
			<Box h='1px' w='500px' m='auto' backgroundColor='gray.800' />
			<Box h='24px' />
			<List>
				{products.map((value, index, array) => {
					return (
						<ProductItem
							key={index}
							src={value.image}
							name={value.name}
							title={value.title}
							href={`/products/${index}`}
						/>
					);
				})}
			</List>
		</Box>
	);
}
