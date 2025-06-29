import { CheckIcon } from "@heroicons/react/24/outline";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { cn } from "../utils";

export interface CheckboxProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"children" | "type" | "onChange"
	> {
	checked?: boolean;
	onCheckedChange?: (value: boolean) => void;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
	(props, ref) => {
		const { checked, value, className, onCheckedChange, onClick, ...rest } =
			props;
		const [isChecked, setIsChecked] = useState(!!checked);
		const triggerRef = useRef<HTMLButtonElement>(null);

		useImperativeHandle(ref, () => triggerRef.current!);

		if (typeof checked === "boolean") {
			if (checked !== isChecked) {
				setIsChecked(checked);
			}
		}

		return (
			<button
				{...rest}
				type="button"
				className={cn(
					"flex size-10 items-center justify-center p-1 text-transparent rounded-md border border-gray-300 transition-colors duration-100 outline-0 cursor-pointer",
					"hover:bg-gray-200 focus:bg-gray-200 data-[checked=true]:hover:bg-blue-400 data-[checked=true]:focus:bg-blue-400",
					"data-[checked=true]:bg-blue-500 data-[checked=true]:text-white",
					className,
				)}
				onClick={(e) => {
					onClick?.(e);
					triggerRef.current?.blur();

					const newValue = !isChecked;
					setIsChecked(newValue);
					onCheckedChange?.(newValue);
				}}
				data-checked={isChecked}
				ref={triggerRef}
			>
				<CheckIcon className="size-full shrink-0" />
			</button>
		);
	},
);
Checkbox.displayName = "Checkbox";
