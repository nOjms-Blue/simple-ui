import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, type, ...rest } = props;

	return (
		<input
			{...rest}
			className={cn(
				"w-full h-10 px-2 text-gray-800 bg-white rounded-md border border-gray-300 outline-0",
				"placeholder:text-gray-400",
				"hover:bg-gray-200/25 focus:bg-white focus:ring-2 focus:ring-blue-500",
				className,
			)}
			type={type}
			ref={ref}
		/>
	);
});
Input.displayName = "Input";
