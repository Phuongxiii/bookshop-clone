/** @format */

import {
	Box,
	Center,
	HStack,
	Link,
	List,
	ListItem,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";
import NewsLetter from "./NewsLetter";

export default function Footer() {
	return (
		<Center
			w='full'
			color='white'
			m='-8px 0'
			top='0px'
			position='relative'
			backgroundColor='black'>
			<VStack w='70%'>
				<Box display='flex' w='full' paddingY={24}>
					<Box w='50%'>
						<NewsLetter />
					</Box>
					<Box w='50%' display='flex'>
						<ContactUs />
						<FollowUs />
					</Box>
				</Box>
				<VStack
					fontWeight='600'
					p='24px'
					fontSize='16px'
					color='#9b9a9f'>
					<Center>COPYRIGHT 2022 STUDIO NEAT.</Center>
					<HStack>
						<List display='flex'>
							<ListItem>
								<Link href='/'>Press</Link>
							</ListItem>
							<Box
								w='1px'
								h='18px'
								marginX='6px'
								backgroundColor='#9b9a9f'
							/>
							<ListItem>
								<Link href='/'>FAQ</Link>
							</ListItem>
							<Box
								w='1px'
								h='18px'
								marginX='6px'
								backgroundColor='#9b9a9f'
							/>
							<ListItem>
								<Link href='/'>Terms</Link>
							</ListItem>
							<Box
								w='1px'
								h='18px'
								marginX='6px'
								backgroundColor='#9b9a9f'
							/>
							<ListItem>
								<Link href='/'>Privacy</Link>
							</ListItem>
							<Box
								w='1px'
								h='18px'
								marginX='6px'
								backgroundColor='#9b9a9f'
							/>
						</List>
					</HStack>
				</VStack>
			</VStack>
		</Center>
	);
}
