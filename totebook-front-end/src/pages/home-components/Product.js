/** @format */

import { Box, Center, Container, List, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProductItem from "./ProductItem";

export default function Product({ posts }) {
	return (
		<Box
			backgroundColor='#f4f1ea'
			m='-8px 0'
			paddingBottom={24}
			h='full'
			position='relative'
			top='0px'
			w='full'>
			<Container maxW='80%'>
				<Center>
					<VStack>
						<Text
							textAlign='center'
							p={10}
							w='720px'
							fontSize='24px'
							fontStyle='italic'>
							Here at Studio Neat, we design tools for people. See
							everything we make below.
						</Text>
						<Center w='120px' h='2px' backgroundColor='#333' />
					</VStack>
				</Center>
				<List>
					{posts != null
						? posts.map((value, index, array) => {
								return (
									<ProductItem
										key={index}
										src={value.image}
										name={value.name}
										title={value.title}
										href={`/products/${index}`}
									/>
								);
						  })
						: null}
				</List>
			</Container>
		</Box>
	);
}
