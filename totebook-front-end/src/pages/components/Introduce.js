/** @format */

import {
	Box,
	Heading,
	HStack,
	Image,
	VStack,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-slideshow-image";

export default function Introduce({
	image,
	name,
	title,
	description,
	type,
	price,
}) {
	const [currentType, setCurrentType] = useState(type[0]);
	const images = [
		{
			src: image,
			name: "1",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0057/8492/products/Detail-Tip_1024x1024.jpg?v=1543214214",
			name: "2",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0057/8492/products/BN_1024x1024.jpg?v=1569188568",
			name: "3",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0057/8492/products/BC_1024x1024.jpg?v=1569188568",
			name: "4",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0057/8492/products/WC_1024x1024.jpg?v=1569188568",
			name: "5",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0057/8492/products/WC_1024x1024.jpg?v=1569188568",
			name: "6",
		},
	];
	return (
		<Box paddingY={12} w='container.lg'>
			<HStack justifyContent='space-between'>
				<Box
					borderRadius='50%'
					overflow='hidden'
					className='slide-container'
					w='50%'>
					<Slide autoplay={true} arrows={false} nextArrow='swipe'>
						{images.map((value, index, array) => {
							return (
								<Box
									key={index}
									h='500px'
									backgroundImage={value.src}
									backgroundSize='cover'
									alt={value.name}
								/>
							);
						})}
					</Slide>
				</Box>
				<VStack w='50%' p={12} textAlign='center'>
					<Heading fontFamily='Comic Neue, cursive' fontSize='36px'>
						{name}
					</Heading>
					<Heading fontFamily='Comic Neue, cursive' fontSize='14px'>
						{title}
					</Heading>
					<Heading
						fontFamily='Comic Neue, cursive'
						fontSize='24px'
						lineHeight='30px'>
						{description}
					</Heading>
					<Box height={8} />
					<Box
						backgroundColor='white'
						border='1px'
						w='55%'
						h='48px'
						borderRadius='2xl'>
						<Menu as={Button}>
							<MenuButton w='100%' h='100%'>
								{currentType}
							</MenuButton>
							<MenuList>
								{type.map((value, index) => (
									<MenuItem
										onClick={(e) => {
											setCurrentType(value);
										}}
										key={index}>
										{value}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Box>
					<Box height={8} />
					<Button
						fontFamily='Comic Neue, cursive'
						backgroundColor='#ee5b28'
						w='160px'
						fontSize='26px'
						fontStyle='italic'>
						Buy! {price}
					</Button>
					<Box height={8} />
					<Text opacity='0.7' fontSize='12px' fontWeight='500'>
						Looking for ink refills? <Link>Get them here.</Link>
					</Text>
				</VStack>
			</HStack>
		</Box>
	);
}
