import { ChevronUpIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import { forwardRef, useState } from "react";

import { cn } from "../utils";
import { SelectContext } from "./context";

export interface SelectProps {
	className?: string;
	children: ReactNode;
	open: boolean;
	onOpen: () => void;
	onClose: () => void;
	value: string | null;
	onValueChange: (value: string | null) => void;
	placeholder?: string;
	toggleable?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
	(props, ref) => {
		const [node, setNode] = useState<ReactNode>("");

		return (
			<div className="relative w-full">
				<div
					className={cn(
						"fixed top-0 left-0 z-50 w-screen min-h-screen overflow-hidden opacity-0",
						props.open ? "pointer-events-auto" : "pointer-events-none",
					)}
					onClick={props.onClose}
				/>
				<button
					className={cn(
						"flex w-full h-10 items-center justify-between px-4 text-gray-800 bg-white rounded-md border border-gray-300 outline-0 cursor-pointer",
						"hover:bg-gray-200/75 focus:bg-gray-200/75",
						props.open ? "bg-gray-200/75" : "",
						"disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-default",
						props.readOnly && !props.disabled
							? "disabled:bg-white disabled:text-gray-800"
							: "",
						props.className,
					)}
					onClick={props.onOpen}
					ref={ref}
					disabled={props.disabled || props.readOnly}
				>
					<div className={props.value === null ? "text-gray-400" : ""}>
						{props.value !== null ? node : props.placeholder}
					</div>
					<ChevronUpIcon
						className={cn(
							"size-5 transition-translate duration-200",
							props.open ? "rotate-0" : "rotate-180",
						)}
					/>
				</button>
				<div
					className={cn(
						"absolute top-10 left-0 z-60 w-full bg-white rounded-md border border-gray-300 shadow-md transition-opacity duration-200",
						props.open
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none",
					)}
				>
					<SelectContext.Provider
						value={{
							onClose: props.onClose,
							onValueChange: (value, node) => {
								setNode(node);
								if (props.value !== value) {
									props.onValueChange(value);
								}
							},
							value: props.value,
							toggleable: props.toggleable ?? false,
						}}
					>
						{props.children}
					</SelectContext.Provider>
				</div>
			</div>
		);
	},
);
