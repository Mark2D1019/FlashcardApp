import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { CheckWord } from "../components/pages/CheckWord";

export const Router: VFC = memo(() => {
	return (
		<Routes>
			<Route path="/" element={<CheckWord />} />
		</Routes>
	);
});
