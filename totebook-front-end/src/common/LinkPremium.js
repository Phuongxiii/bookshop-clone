/** @format */

import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import BoxMenu from "./BoxMenu";

// const BoxPremium = styled.div``;

const LinkNext = ({ className, link, children, boxChildren }) => (
	<Box className={className} position='relative'>
		<Link href={link != undefined ? link : ""}>
			<Text
				lineHeight='14px'
				fontSize='14px'
				color='#5a5958'
				fontWeight='700'>
				{children}
			</Text>
		</Link>
		<BoxMenu>{boxChildren}</BoxMenu>
	</Box>
);

const LinkPremium = styled(LinkNext)`
	&:hover .box-menu {
		display: block;
	}
`;
const LinkPage = styled(LinkNext)``;

export default LinkPremium;
export { LinkPage };
