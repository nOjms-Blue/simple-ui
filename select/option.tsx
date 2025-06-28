import { CheckIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import { forwardRef, useContext, useEffect } from "react";
import { cn } from "../utils";
import { SelectContext } from "./context";

export interface SelectOptionProps {
	value: string;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
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
					"relative w-full h-10 pl-8 pr-4 text-left text-gray-800 bg-white rounded-md outline-0",
					"hover:bg-gray-100 focus:bg-gray-100",
					props.value === context.value
						? "disabled:bg-white disabled:text-gray-800"
						: "disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-default",
					props.className,
				)}
				disabled={props.disabled || props.value === context.value}
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
				{props.value === context.value ? (
					<CheckIcon className="absolute left-2 inset-y-0 my-auto size-5" />
				) : undefined}
				{props.children}
			</button>
		);
	},
);
SelectOption.displayName = "SelectOption";
