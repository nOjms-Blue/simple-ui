import { createContext } from "react";

export type RadioContextType = {
	value: string | null;
	onValueChange: (value: string | null) => void;
};

export const RadioContext = createContext<RadioContextType>({
	value: null,
	onValueChange: () => {},
});
