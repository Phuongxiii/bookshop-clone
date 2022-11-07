/** @format */

import {
	Box,
	Container,
	Image,
	LightMode,
	Link,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LinkPremium, { LinkPage } from "./LinkPremium";

export default function NavBar() {
	return (
		<Box backgroundColor='#f4f1ea' position='relative'>
			<LightMode>
				<Box
					right='230px'
					position='absolute'
					backgroundColor='#ffffff'
					p='4px'
					lineHeight='12px'
					fontSize='12px'
					m='4px'
					fontWeight='700'>
					FREE SHIPPING ON U.S. ORDERS OVER $150.
				</Box>
				<Container
					maxW='75%'
					h='110px'
					display='flex'
					justifyContent='space-between'
					alignContent='center'>
					<Box alignItems='center' w='50%' display='flex'>
						<Link href='/'>
							<Image src='/SN Monogram.svg' w='45px' m='16px' />
						</Link>
						<Link href='/'>
							<Text
								fontSize='32px'
								textColor={useColorModeValue(
									"#33333",
									"#33333"
								)}
								display={{ base: "none", lg: "block" }}
								fontWeight='100'>
								Studio Neat
							</Text>
						</Link>
					</Box>
					<Box
						alignItems='center'
						w='50%'
						justifyContent='space-around'
						display='flex'>
						<LinkPremium
							link='/'
							boxChildren={<Text>Hello World</Text>}>
							PRODUCTS
						</LinkPremium>
						<LinkPage link='/'>LIMITED</LinkPage>
						<LinkPage link='/'>CUSTOM</LinkPage>
						<LinkPremium
							link='/'
							boxChildren={<Text>Hello World</Text>}>
							ABOUT US
						</LinkPremium>
						<LinkPage link='/'>CART({0})</LinkPage>
					</Box>
				</Container>
			</LightMode>
		</Box>
	);
}
