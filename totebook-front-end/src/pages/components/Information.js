/** @format */

import React from "react";
import { VStack, Heading, Image } from "@chakra-ui/react";

export default function Information({ icon, name, title, description }) {
	return (
		<VStack spacing='24px'>
			<Image w='90px' src={icon} />
			<Heading fontSize='33px' fontFamily='Comic Neue, cursive'>
				{name}
			</Heading>
			<Heading fontSize='26px' fontFamily='Comic Neue, cursive'>
				{title}
			</Heading>
			<Heading fontSize='20px' fontFamily='Comic Neue, cursive'>
				{description}
			</Heading>
		</VStack>
	);
}
