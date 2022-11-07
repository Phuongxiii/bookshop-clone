/** @format */

import React from "react";
import { useRouter } from "next/router";
import { Center } from "@chakra-ui/react";

export default function Products() {
	const router = useRouter();
	const { id } = router.query;
	return <Center>{id}</Center>;
}
