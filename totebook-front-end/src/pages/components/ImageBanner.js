/** @format */

import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function ImageBanner() {
	const linkImage = [
		"https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/product-lifestyle-mk1-3.jpg?v=9607380439352944571524771921",
		"https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/product-lifestyle-mk1-4.jpg?v=91770279076548641261524779131",
		"https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/product-lifestyle-mk1-5.jpg?v=12840855405443094201524779159",
		"https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/product-lifestyle-mk1-6.jpg?v=124457138749376030411524779249",
	];
	return (
		<Box maxW='container.lg' paddingY={6}>
			{linkImage.map((value, index, array) => {
				return (
					<Image
						key={index}
						w='50%'
						float='left'
						p='12px'
						src={value}
					/>
				);
			})}
		</Box>
	);
}
