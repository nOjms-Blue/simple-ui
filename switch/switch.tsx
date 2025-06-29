import type { ButtonHTMLAttributes } from "react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { cn } from "../utils";

export interface SwitchProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> {
	checked?: boolean;
	onCheckedChange?: (value: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
	(props, ref) => {
		const { className, checked, onCheckedChange, onClick, ...rest } = props;
		const [isChecked, setIsChecked] = useState(checked ?? false);
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
					"relative h-10 w-16 rounded-full bg-gray-300 border border-gray-300 cursor-pointer transition-colors duration-200",
					"after:absolute after:inset-y-0 after:left-1 after:my-auto after:block after:size-8 after:rounded-full after:bg-white after:transition-transform after:duration-200",
					"data-[checked=true]:bg-blue-500 data-[checked=true]:after:left-auto data-[checked=true]:after:right-1",
					"hover:bg-gray-400 focus:bg-gray-400 data-[checked=true]:hover:bg-blue-400 data-[checked=true]:focus:bg-blue-400",
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
			></button>
		);
	},
);
Switch.displayName = "Switch";
