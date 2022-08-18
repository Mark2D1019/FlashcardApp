import { memo, VFC, useState } from "react";

import sample from "./sample.json";

import { Flex, ButtonGroup, VStack } from "@chakra-ui/react";
import { SimpleButton } from "../atoms/button/SimpleButton";
import { QuestionCard } from "../atoms/card/QuestionCard";
import { AnswerCard } from "../atoms/card/AnswerCard";
import { Worddata } from "../../types/worddata";

export const ActionArea: VFC = memo(() => {
	const [ans, setAns] = useState<boolean>(false);
	const [word, setWord] = useState<Array<Worddata>>([sample]);

	console.log(word);

	const onClickChange = () => {
		setAns(true);
	};

	return (
		<VStack spacing={4} align="stretch">
			<QuestionCard onClick={onClickChange}>text</QuestionCard>
			{ans === false && (
				<Flex align="center" justify="center" height="5vh">
					<SimpleButton>TIPS</SimpleButton>
				</Flex>
			)}
			{ans === true && <AnswerCard>test</AnswerCard>}
			{ans === true && (
				<Flex align="center" justify="center" height="30vh">
					<ButtonGroup gap={100}>
						<SimpleButton>NG</SimpleButton>
						<SimpleButton>OK</SimpleButton>
					</ButtonGroup>
				</Flex>
			)}
		</VStack>
	);
});
