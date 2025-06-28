import { CheckIcon } from "@heroicons/react/24/outline";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext, useEffect } from "react";
import { cn } from "../utils";
import { SelectContext } from "./context";

export interface SelectOptionProps {
	value: string;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	onFocus?: ButtonHTMLAttributes<HTMLButtonElement>["onFocus"];
	onBlur?: ButtonHTMLAttributes<HTMLButtonElement>["onBlur"];
	onMouseOver?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseOver"];
	onMouseOut?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseOut"];
	onMouseEnter?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseEnter"];
	onMouseLeave?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseLeave"];
	onMouseDown?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseDown"];
	onMouseUp?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseUp"];
	onMouseMove?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseMove"];
	onKeyDown?: ButtonHTMLAttributes<HTMLButtonElement>["onKeyDown"];
	onKeyUp?: ButtonHTMLAttributes<HTMLButtonElement>["onKeyUp"];
}

export const SelectOption = forwardRef<HTMLButtonElement, SelectOptionProps>(
	(props, ref) => {
		const { value, children, className, disabled, onClick, ...rest } = props;
		const context = useContext(SelectContext);

		useEffect(() => {
			if (context.value === value) {
				context.onValueChange(value, children);
			}
		}, [context.value, value]);

		return (
			<button
				{...rest}
				ref={ref}
				className={cn(
					"relative w-full h-10 pl-8 pr-4 text-left text-gray-800 bg-white rounded-md outline-0",
					"hover:bg-gray-100 focus:bg-gray-100",
					value === context.value
						? "disabled:bg-white disabled:text-gray-800"
						: "disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-default",
					className,
				)}
				disabled={
					disabled ||
					(value === context.value && !context.toggleable) ||
					!context.open
				}
				onClick={(e) => {
					if (context.toggleable) {
						if (context.value === value) {
							context.onValueChange(null, "");
						} else {
							context.onValueChange(value, children);
						}
					} else {
						context.onValueChange(value, children);
					}
					context.onClose();
					onClick?.(e);
				}}
			>
				{value === context.value ? (
					<CheckIcon className="absolute left-2 inset-y-0 my-auto size-5" />
				) : undefined}
				{children}
			</button>
		);
	},
);
SelectOption.displayName = "SelectOption";
