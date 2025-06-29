import type { HTMLAttributes } from "react";

import { RadioContext } from "./context";

export interface RadioGroupProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	value: string | null;
	onValueChange: (value: string | null) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {
	const { children, value, onValueChange, ...rest } = props;

	return (
		<RadioContext.Provider value={{ value, onValueChange }}>
			<div {...rest}>{children}</div>
		</RadioContext.Provider>
	);
};
