/** @format */

import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Specification({ specifecations }) {
	const [spec, setSpec] = useState(specifecations);
	if (spec != null) {
		return (
			<Box p={8}>
				<Heading
					textAlign='center'
					fontWeight='600'
					textDecoration='underline'
					fontFamily='Comic Neue, cursive'>
					Specification
				</Heading>
				<List listStyleType='initial'>
					{spec.map((value, index, array) => {
						return (
							<ListItem
								key={index}
								lineHeight='28px'
								fontFamily='Comic Neue, cursive'
								fontSize='18px'
								fontWeight='500'>
								{value}
							</ListItem>
						);
					})}
				</List>
			</Box>
		);
	}
}
