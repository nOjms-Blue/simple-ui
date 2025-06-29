import type { ButtonHTMLAttributes } from "react";
import { useState } from "react";

import { cn } from "../utils";

export interface SwitchProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> {
	checked?: boolean;
	onCheckedChange?: (value: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
	const { className, checked, onCheckedChange, onClick, ...rest } = props;
	const [isChecked, setIsChecked] = useState(checked ?? false);

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
				"relative h-10 w-16 rounded-full bg-gray-300 border border-gray-300 transition-colors duration-200",
				"after:absolute after:inset-y-0 after:left-1 after:my-auto after:block after:size-8 after:rounded-full after:bg-white after:transition-transform after:duration-200",
				"data-[checked=true]:bg-blue-500 data-[checked=true]:after:left-auto data-[checked=true]:after:right-1",
				className,
			)}
			onClick={(e) => {
				const newValue = !isChecked;
				setIsChecked(newValue);
				onCheckedChange?.(newValue);
				onClick?.(e);
			}}
			data-checked={isChecked}
		></button>
	);
};
