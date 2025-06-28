import { ChevronUpIcon } from "@heroicons/react/24/outline";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { cn } from "../utils";
import { SelectContext } from "./context";

export interface SelectProps {
	children: ReactNode;
	open: boolean;
	value: string | null;
	className?: string;
	disabled?: boolean;
	placeholder?: string;
	readOnly?: boolean;
	toggleable?: boolean;
	onOpen: () => void;
	onClose: () => void;
	onValueChange: (value: string | null) => void;
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

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
	(props, ref) => {
		const {
			children,
			open,
			value,
			className,
			disabled,
			placeholder,
			readOnly,
			toggleable,
			onOpen,
			onClose,
			onValueChange,
			onClick,
			onKeyDown,
			...rest
		} = props;
		const [node, setNode] = useState<ReactNode>("");
		const triggerRef = useRef<HTMLButtonElement>(null);

		useImperativeHandle(ref, () => triggerRef.current!);

		return (
			<div className="relative w-full">
				<div
					className={cn(
						"fixed top-0 left-0 z-50 w-screen min-h-screen overflow-hidden opacity-0",
						open ? "pointer-events-auto" : "pointer-events-none",
					)}
					onClick={onClose}
				/>
				<button
					{...rest}
					className={cn(
						"flex w-full h-10 items-center justify-between px-4 text-gray-800 bg-white rounded-md border border-gray-300 outline-0 cursor-pointer",
						"hover:bg-gray-200/75 focus:bg-gray-200/75",
						open ? "bg-gray-200/75" : "",
						"disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-default",
						readOnly && !disabled
							? "disabled:bg-white disabled:text-gray-800"
							: "",
						className,
					)}
					onClick={(e) => {
						onOpen();
						onClick?.(e);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !disabled && !readOnly) {
							if (open) {
								onClose();
							} else {
								onOpen();
							}
						}
						onKeyDown?.(e);
					}}
					ref={triggerRef}
					disabled={disabled || readOnly}
				>
					<div className={value === null ? "text-gray-400" : ""}>
						{value !== null ? node : placeholder}
					</div>
					<ChevronUpIcon
						className={cn(
							"size-5 transition-translate duration-200",
							open ? "rotate-0" : "rotate-180",
						)}
					/>
				</button>
				<div
					className={cn(
						"absolute top-10 left-0 z-60 w-full bg-white rounded-md border border-gray-300 shadow-md transition-opacity duration-200",
						open
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none",
					)}
				>
					<SelectContext.Provider
						value={{
							onClose: () => {
								onClose();
								triggerRef.current?.focus();
							},
							onValueChange: (value, node) => {
								setNode(node);
								if (props.value !== value) {
									onValueChange(value);
								}
							},
							value: value,
							toggleable: toggleable ?? false,
							open: open,
						}}
					>
						{children}
					</SelectContext.Provider>
				</div>
			</div>
		);
	},
);
