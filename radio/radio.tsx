import type { ButtonHTMLAttributes } from "react";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { cn } from "../utils";
import { RadioContext } from "./context";

export interface RadioProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"children" | "type" | "value"
	> {
	value: string;
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
	const { value, className, ...rest } = props;
	const context = useContext(RadioContext);
	const triggerRef = useRef<HTMLButtonElement>(null);

	useImperativeHandle(ref, () => triggerRef.current!);

	const isChecked = context.value === value;

	return (
		<button
			{...rest}
			type="button"
			className={cn(
				"group flex size-10 items-center justify-center p-1 text-transparent rounded-full border border-gray-300 transition-colors duration-100 outline-0 cursor-pointer",
				"hover:bg-gray-200 focus:bg-gray-200",
				className,
			)}
			value={value}
			data-checked={isChecked}
			onClick={(e) => {
				context.onValueChange(value);
				rest.onClick?.(e);
				triggerRef.current?.blur();
			}}
			ref={triggerRef}
		>
			<div className="size-full rounded-full bg-transparent group-data-[checked=true]:bg-blue-500 group-data-[checked=true]:group-hover:bg-blue-400 group-data-[checked=true]:group-focus:bg-blue-400" />
		</button>
	);
});
Radio.displayName = "Radio";
