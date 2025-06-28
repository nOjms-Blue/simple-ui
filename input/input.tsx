import type { InputHTMLAttributes } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

import { cn } from "../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, type, onChange, onBlur, ...rest } = props;
	const triggerRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => triggerRef.current!);

	return (
		<input
			{...rest}
			className={cn(
				"w-full h-10 px-2 text-gray-800 bg-white rounded-md border border-gray-300 outline-0",
				"placeholder:text-gray-400",
				"hover:bg-gray-200/25 focus:bg-white focus:ring-2 focus:ring-blue-500",
				"disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-default",
				"read-only:bg-white read-only:text-gray-800 read-only:cursor-default read-only:caret-transparent",
				"read-only:hover:bg-white read-only:focus:bg-white",
				className,
			)}
			type={type}
			onChange={(e) => {
				if (triggerRef.current) triggerRef.current.value = e.target.value;
				onChange?.(e);
			}}
			onBlur={(e) => {
				if (type === "date" || type === "datetime-local") {
					const date = new Date(e.target.value);
					if (Number.isNaN(date.getTime())) {
						if (triggerRef.current) {
							triggerRef.current.value = "";
						}
						e.target.value = "";
						onChange?.(e);
					}
				} else if (type === "time") {
					const time = new Date(`1970-01-01T${e.target.value}`);
					if (Number.isNaN(time.getTime())) {
						if (triggerRef.current) {
							triggerRef.current.value = "";
						}
						e.target.value = "";
						onChange?.(e);
					}
				}
				onBlur?.(e);
			}}
			ref={triggerRef}
		/>
	);
});
Input.displayName = "Input";
