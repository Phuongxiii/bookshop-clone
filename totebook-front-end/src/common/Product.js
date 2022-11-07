/** @format */

import { Image, HStack, Text, VStack, Link, Box } from "@chakra-ui/react";
import React from "react";

export default function Product({ src, name, title, href }) {
	return (
		<Link href={href}>
			<HStack
				h='68px'
				p='8px'
				_hover={{
					backgroundColor: "#e0ddd7",
				}}>
				<VStack w='80%' alignItems='flex-start'>
					<Text fontSize='14px' fontWeight='500'>
						{name}
					</Text>
					<Text fontSize='12px' fontWeight='500'>
						{title}
					</Text>
				</VStack>
				<Image
					src={src}
					borderRadius='full'
					boxSize='48px'
					borderColor='#E0DDD7'
					border='2px '
				/>
			</HStack>
			<Box h='1.5px' backgroundColor='#e0ddd7' />
		</Link>
	);
}
