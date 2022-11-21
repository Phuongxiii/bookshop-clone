/** @format */

import { Box } from "@chakra-ui/react";
import React from "react";

export default function VideoComponent({ video }) {
	return (
		<Box p={12} height='100%' width='100%'>
			<div align='center'>
				<video
					display='none'
					poster='https://cdn.shopify.com/s/files/1/0057/8492/t/6/assets/heroImage_makeone.jpg?v=44519315798686043731524778695'
					width='1280px'
					height='960px'
					controls
					crossOrigin='anonymous'>
					<source src={video} type='application/x-mpegURL'></source>
					<source
						src='https://player.vimeo.com/external/266763490.hd.mp4?s=8ae9c25f961b60148146fa3499d869cbd8fcc410&profile_id=175'
						type='video/mp4'></source>
				</video>
			</div>
		</Box>
	);
}
