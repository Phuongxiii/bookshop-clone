/** @format */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Center, VStack } from "@chakra-ui/react";
import Introduce from "../components/Introduce";
import VideoComponent from "../components/VideoComponent";
import Feature from "../components/Feature";
import ImageBanner from "../components/ImageBanner";
import Specification from "../components/Specification";
import Suggestion from "../components/Suggestion";
import axios from "axios";

export default function Products() {
	const router = useRouter();
	const { id } = router.query;
	const [data, setData] = useState(null);
	useEffect(() => {
		if (id != null) {
			const path = `http://127.0.0.1:8000/product/${parseInt(id) + 1}/`;
			axios
				.get(path)
				.then((data) => {
					setData(data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}, [id]);
	if (data != null) {
		return (
			<VStack w='full' backgroundColor='#f4f1ea'>
				<Introduce
					image={data.image}
					name={data.name}
					title={data.title}
					description={data.description}
					type={data.type}
					price={data.price}
				/>
				<VideoComponent video={data.video} />
				<Box h='1px' w='100%' backgroundColor='gray.300' />
				{data.information_field[0].feature_field.map(
					(value, index, array) => {
						if (value != null) {
							return (
								<Feature
									key={index}
									direction={index % 2 == 0}
									feature_field={value}
								/>
							);
						}
					}
				)}
				<Feature direction={true} />
				<ImageBanner />
				<Specification
					specifecations={data.information_field[0].specifecations}
				/>
				<Suggestion />
			</VStack>
		);
	} else {
		return <Box p={120}>{id}</Box>;
	}
}