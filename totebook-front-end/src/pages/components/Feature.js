/** @format */

import { Box, Divider, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Information from "./Information";

export default function Feature({ direction, feature_field, ...prop }) {
	useEffect(() => {}, []);
	if (feature_field != null) {
		return (
			<Box
				{...prop}
				w='full'
				maxH='500px'
				backgroundSize='cover'
				borderColor='gray.300'
				backgroundImage='https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/bottom-gradient.png?v=154052581362312256491471552067'
				backgroundRepeat='no-repeat'>
				{direction ? (
					<HStack
						w='80%'
						paddingLeft='240px'
						justifyContent='space-between'>
						<Image h='500px' src={feature_field.image} />
						<Information
							icon={feature_field.icon}
							name={feature_field.feature_name}
							title={feature_field.title}
							description={feature_field.information_feature}
						/>
					</HStack>
				) : (
					<HStack
						w='80%'
						paddingLeft='240px'
						justifyContent='space-between'>
						<Information
							icon={feature_field.icon}
							name={feature_field.feature_name}
							title={feature_field.title}
							description={feature_field.information_feature}
						/>
						<Image h='500px' src={feature_field.image} />
					</HStack>
				)}
			</Box>
		);
	}
}
