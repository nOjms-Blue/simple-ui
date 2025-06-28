import { forwardRef } from "react";

import { cn } from "../utils";

export type ButtonVariant = "primary" | "outline" | "ghost" | "underline";

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	children: React.ReactNode;
	variant?: ButtonVariant;
}

const VARIANT_CLASS_NAME: { [key in ButtonVariant]: string } = {
	primary: cn(
		"bg-blue-500 text-white",
		"hover:bg-blue-400 focus:bg-blue-400 disabled:bg-blue-300 disabled:text-gray-200",
	),
	outline: cn(
		"bg-transparent border border-gray-300",
		"hover:bg-gray-200/75 focus:bg-gray-200/75",
		"disabled:bg-gray-200/75 disabled:border-gray-200 disabled:text-gray-800/50",
	),
	ghost: cn(
		"bg-transparent",
		"hover:bg-gray-200/75 focus:bg-gray-200/50",
		"disabled:bg-transparent disabled:text-gray-800/50",
	),
	underline: cn(
		"bg-transparent underline",
		"hover:text-gray-800/50 focus:text-gray-800/50",
		"disabled:text-gray-800/50",
	),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const { children, className, type, variant, ...rest } = props;
		const decideVariant =
			variant ?? (type === "submit" ? "primary" : "outline");

		return (
			<button
				{...rest}
				className={cn(
					"w-full h-10 px-2 text-gray-800 rounded-md outline-0 cursor-pointer",
					"transition-colors duration-100",
					"disabled:cursor-default",
					VARIANT_CLASS_NAME[decideVariant],
					className,
				)}
				ref={ref}
			>
				{children}
			</button>
		);
	},
);
Button.displayName = "Button";
