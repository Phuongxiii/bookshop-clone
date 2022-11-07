/** @format */

import {
	Box,
	Button,
	FormControl,
	Heading,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";

export default function NewsLetter() {
	return (
		<Box color='#808080'>
			<Heading color='white' fontSize='16px'>
				NEWSLETTER
			</Heading>
			<Text w='80%' fontSize='12px' fontWeight='700'>
				JOIN OUR INFREQUENTLY USED, ONLY ON SPECIAL OCCASIONS,
				NON-SPAMMY NEWSLETTER.
			</Text>
			<FormControl display='flex'>
				<Input placeholder='Email Address' w='50%' m='6px' />{" "}
				<Button m='6px' onClick={() => {}}>
					SUBSCRIBE
				</Button>
			</FormControl>
			<Text w='60%' fontSize='12px' fontWeight='700'>
				OR, CHECK OUT OUR WEEKLY <Link href='/'>GAZETTE.</Link>
			</Text>
		</Box>
	);
}
