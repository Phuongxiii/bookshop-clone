/** @format */

import {
	Box,
	Button,
	Center,
	Link,
	Text,
	useColorMode,
	VStack,
} from "@chakra-ui/react";
import Information from "./home-components/Information";
import Product from "./home-components/Product";
import Footer from "./home-components/Footer";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<VStack position='relative'>
			<Box
				w='full'
				overflow='hidden'
				m='-8px 0'
				h={{ base: "40vh", lg: "80vh" }}
				backgroundSize='cover'
				backgroundImage='/background-image.png'
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				position='relative'
				objectFit='cover'>
				<Center>
					<VStack w='980px' top='345px' position='absolute'>
						<Text
							fontSize='52px'
							fontWeight='600'
							textAlign='center'>
							Mark Three: A Minimal and Durable Mechanical Pencil
						</Text>
						<Button
							backgroundColor='#034752'
							color='#fff'
							fontFamily='Archer A,Archer B,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif'
							_hover={{
								opacity: "0.8",
							}}
							p={6}
							paddingX={6}
							w='360px'>
							<Link href='/'>GET MARK THREE</Link>
						</Button>
					</VStack>
				</Center>
			</Box>
			<Product />
			<Information />
			<Footer />
		</VStack>
	);
}
