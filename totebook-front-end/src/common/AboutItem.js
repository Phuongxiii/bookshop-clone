/** @format */

import { Heading, HStack, Link, Box } from "@chakra-ui/react";
import React from "react";

export default function AboutItem({ content, href }) {
	return (
		<Link href={href}>
			<HStack
				h='68px'
				p='12px'
				_hover={{
					backgroundColor: "#e0ddd7",
				}}>
				<Heading fontSize='16px' fontWeight='500'>
					{content}
				</Heading>
			</HStack>
			<Box h='1.5px' backgroundColor='#e0ddd7' />
		</Link>
	);
}
