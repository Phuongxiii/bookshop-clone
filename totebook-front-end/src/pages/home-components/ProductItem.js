/** @format */

import {
	Box,
	Heading,
	Image,
	Link,
	Text,
	VStack,
	ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function ProductItem({ src, name, title, href }) {
	return (
		<ListItem float='left' marginLeft='38px'>
			<VStack p={8}>
				<Link href={href} textAlign='center'>
					<Image
						src={src}
						borderRadius='full'
						boxSize='280px'
						borderColor='#33333'
						border='8px '
					/>
					<Heading
						paddingTop={2}
						fontWeight='500'
						fontSize='26px'
						as='h2'>
						{name}
					</Heading>
				</Link>
				<Box w='40px' backgroundColor='black' h='2px' />
				<Text textAlign='center' w='240px'>
					{title}
				</Text>
			</VStack>
		</ListItem>
	);
}
