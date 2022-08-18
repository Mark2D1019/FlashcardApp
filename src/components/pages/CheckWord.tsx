import { VStack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { ActionArea } from "../molecules/ActionArea";
import { StatusArea } from "../molecules/StatusArea";

export const CheckWord: VFC = memo(() => {
	return (
		<VStack mt={0} spacing={3} align="stretch">
			<StatusArea />
			<ActionArea />
		</VStack>
	);
});
