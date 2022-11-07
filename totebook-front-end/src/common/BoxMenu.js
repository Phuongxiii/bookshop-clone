/** @format */

import { Box } from "@chakra-ui/react";
import React from "react";

export default function BoxMenu({ children }) {
	return (
		<Box
			position='absolute'
			cursor='pointer'
			w='145px'
			zIndex={1}
			left='-50px'
			top='-2px'
			display='none'
			className='box-menu'>
			<Box h='26px' />
			<Box w='270px' background='white'>
				{children}
			</Box>
		</Box>
	);
}
