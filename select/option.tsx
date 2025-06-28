import type { ReactNode } from "react";
import { forwardRef, useContext, useEffect } from "react";

import { cn } from "../utils";
import { SelectContext } from "./context";

export interface SelectOptionProps {
	value: string;
	children: ReactNode;
	className?: string;
}

export const SelectOption = forwardRef<HTMLButtonElement, SelectOptionProps>(
	(props, ref) => {
		const context = useContext(SelectContext);

		useEffect(() => {
			if (context.value === props.value) {
				context.onValueChange(props.value, props.children);
			}
		}, [context.value, props.value]);

		return (
			<button
				ref={ref}
				className={cn(
					"w-full h-10 px-4 text-left text-gray-800 bg-white rounded-md outline-0 hover:bg-gray-100 focus:bg-gray-100",
					props.className,
				)}
				onClick={() => {
					if (context.toggleable) {
						if (context.value === props.value) {
							context.onValueChange(null, "");
						} else {
							context.onValueChange(props.value, props.children);
						}
					} else {
						context.onValueChange(props.value, props.children);
					}
					context.onClose();
				}}
			>
				{props.children}
			</button>
		);
	},
);
SelectOption.displayName = "SelectOption";
