import type { ReactNode } from "react";
import { createContext } from "react";

export type SelectContextType = {
	onClose: () => void;
	onValueChange: (value: string | null, node: ReactNode) => void;
	value: string | null;
	toggleable: boolean;
};

export const SelectContext = createContext<SelectContextType>({
	onClose: () => {},
	onValueChange: () => {},
	value: null,
	toggleable: false,
});
