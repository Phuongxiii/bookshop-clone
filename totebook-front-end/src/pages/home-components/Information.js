/** @format */

import { Box, Button, Center, Heading, Image, VStack } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";

export default function Information() {
	return (
		<Center
			w='full'
			position='relative'
			h='78vh'
			backgroundRepeat='no-repeat'
			objectFit='cover'
			alignItems='center'
			backgroundPosition='center'
			backgroundImage='/about-us-header-2.jpg'>
			<Center
				borderRadius='full'
				backgroundColor='#04313b'
				position='absolute'
				h='500px'
				w='500px'
				opacity='0.8'>
				<VStack>
					<Image boxSize='120px' src='/SN_logo_stroke_white.webp' />
					<Heading
						p='54px'
						textAlign='center'
						fontSize='24px'
						fontWeight='400'
						color='#ffffff'>
						Studio Neat was founded in 2010 by Tom Gerhardt and Dan
						Provost. We are two designers who enjoy making simple
						products that solve problems.
					</Heading>
					<Box
						w='120px'
						h='5px'
						backgroundColor='white'
						opacity='0.8'
					/>
					<Button
						backgroundColor='#04313b'
						color='gray.100'
						_hover={{
							color: "gray.100",

							backgroundColor: "#04313b",
						}}
						opacity='0.8'>
						LEARN MORE
					</Button>
				</VStack>
			</Center>
		</Center>
	);
}
