import type { InputHTMLAttributes } from "react";
import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

import { cn } from "../utils";

export interface ColorInputProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		| "type"
		| "onFocus"
		| "onFocusCapture"
		| "onBlur"
		| "onBlurCapture"
		| "onMouseDown"
		| "onMouseDownCapture"
		| "onMouseEnter"
		| "onMouseLeave"
		| "onMouseMove"
		| "onMouseMoveCapture"
		| "onMouseOut"
		| "onMouseOutCapture"
		| "onMouseOver"
		| "onMouseOverCapture"
		| "onMouseUp"
		| "onMouseUpCapture"
		| "onKeyDown"
		| "onKeyDownCapture"
		| "onKeyUp"
		| "onKeyUpCapture"
		| "onSelect"
		| "onSelectCapture"
		| "onTouchStart"
		| "onTouchStartCapture"
		| "onTouchEnd"
		| "onTouchEndCapture"
		| "onTouchMove"
		| "onTouchMoveCapture"
		| "onTouchCancel"
		| "onTouchCancelCapture"
		| "onWheel"
		| "onWheelCapture"
		| "onDrag"
		| "onDragCapture"
		| "onDragEnd"
		| "onDragEndCapture"
		| "onDragEnter"
		| "onDragEnterCapture"
		| "onDragLeave"
		| "onDragLeaveCapture"
		| "onDragOver"
		| "onDragOverCapture"
		| "onDragStart"
		| "onDragStartCapture"
		| "onDrop"
		| "onDropCapture"
		| "onInput"
		| "onInputCapture"
		| "onInvalid"
		| "onInvalidCapture"
		| "onPaste"
		| "onPasteCapture"
		| "onPointerDown"
		| "onPointerDownCapture"
		| "onPointerMove"
		| "onPointerMoveCapture"
		| "onPointerUp"
		| "onPointerUpCapture"
		| "onScroll"
		| "onScrollCapture"
	> {
	onFocus?: InputHTMLAttributes<HTMLButtonElement>["onFocus"];
	onFocusCapture?: InputHTMLAttributes<HTMLButtonElement>["onFocusCapture"];
	onBlur?: InputHTMLAttributes<HTMLButtonElement>["onBlur"];
	onBlurCapture?: InputHTMLAttributes<HTMLButtonElement>["onBlurCapture"];
	onMouseDown?: InputHTMLAttributes<HTMLButtonElement>["onMouseDown"];
	onMouseDownCapture?: InputHTMLAttributes<HTMLButtonElement>["onMouseDownCapture"];
	onMouseEnter?: InputHTMLAttributes<HTMLButtonElement>["onMouseEnter"];
	onMouseLeave?: InputHTMLAttributes<HTMLButtonElement>["onMouseLeave"];
	onMouseMove?: InputHTMLAttributes<HTMLButtonElement>["onMouseMove"];
	onMouseMoveCapture?: InputHTMLAttributes<HTMLButtonElement>["onMouseMoveCapture"];
	onMouseOut?: InputHTMLAttributes<HTMLButtonElement>["onMouseOut"];
	onMouseOutCapture?: InputHTMLAttributes<HTMLButtonElement>["onMouseOutCapture"];
	onMouseOver?: InputHTMLAttributes<HTMLButtonElement>["onMouseOver"];
	onMouseOverCapture?: InputHTMLAttributes<HTMLButtonElement>["onMouseOverCapture"];
	onMouseUp?: InputHTMLAttributes<HTMLButtonElement>["onMouseUp"];
	onMouseUpCapture?: InputHTMLAttributes<HTMLButtonElement>["onMouseUpCapture"];
	onKeyDown?: InputHTMLAttributes<HTMLButtonElement>["onKeyDown"];
	onKeyDownCapture?: InputHTMLAttributes<HTMLButtonElement>["onKeyDownCapture"];
	onKeyUp?: InputHTMLAttributes<HTMLButtonElement>["onKeyUp"];
	onKeyUpCapture?: InputHTMLAttributes<HTMLButtonElement>["onKeyUpCapture"];
	onSelect?: InputHTMLAttributes<HTMLButtonElement>["onSelect"];
	onSelectCapture?: InputHTMLAttributes<HTMLButtonElement>["onSelectCapture"];
	onTouchStart?: InputHTMLAttributes<HTMLButtonElement>["onTouchStart"];
	onTouchStartCapture?: InputHTMLAttributes<HTMLButtonElement>["onTouchStartCapture"];
	onTouchEnd?: InputHTMLAttributes<HTMLButtonElement>["onTouchEnd"];
	onTouchEndCapture?: InputHTMLAttributes<HTMLButtonElement>["onTouchEndCapture"];
	onTouchMove?: InputHTMLAttributes<HTMLButtonElement>["onTouchMove"];
	onTouchMoveCapture?: InputHTMLAttributes<HTMLButtonElement>["onTouchMoveCapture"];
	onTouchCancel?: InputHTMLAttributes<HTMLButtonElement>["onTouchCancel"];
	onTouchCancelCapture?: InputHTMLAttributes<HTMLButtonElement>["onTouchCancelCapture"];
	onWheel?: InputHTMLAttributes<HTMLButtonElement>["onWheel"];
	onWheelCapture?: InputHTMLAttributes<HTMLButtonElement>["onWheelCapture"];
	onDrag?: InputHTMLAttributes<HTMLButtonElement>["onDrag"];
	onDragCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragCapture"];
	onDragEnd?: InputHTMLAttributes<HTMLButtonElement>["onDragEnd"];
	onDragEndCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragEndCapture"];
	onDragEnter?: InputHTMLAttributes<HTMLButtonElement>["onDragEnter"];
	onDragEnterCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragEnterCapture"];
	onDragLeave?: InputHTMLAttributes<HTMLButtonElement>["onDragLeave"];
	onDragLeaveCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragLeaveCapture"];
	onDragOver?: InputHTMLAttributes<HTMLButtonElement>["onDragOver"];
	onDragOverCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragOverCapture"];
	onDragStart?: InputHTMLAttributes<HTMLButtonElement>["onDragStart"];
	onDragStartCapture?: InputHTMLAttributes<HTMLButtonElement>["onDragStartCapture"];
	onDrop?: InputHTMLAttributes<HTMLButtonElement>["onDrop"];
	onDropCapture?: InputHTMLAttributes<HTMLButtonElement>["onDropCapture"];
	onInput?: InputHTMLAttributes<HTMLButtonElement>["onInput"];
	onInputCapture?: InputHTMLAttributes<HTMLButtonElement>["onInputCapture"];
	onInvalid?: InputHTMLAttributes<HTMLButtonElement>["onInvalid"];
	onInvalidCapture?: InputHTMLAttributes<HTMLButtonElement>["onInvalidCapture"];
	onPaste?: InputHTMLAttributes<HTMLButtonElement>["onPaste"];
	onPasteCapture?: InputHTMLAttributes<HTMLButtonElement>["onPasteCapture"];
	onPointerDown?: InputHTMLAttributes<HTMLButtonElement>["onPointerDown"];
	onPointerDownCapture?: InputHTMLAttributes<HTMLButtonElement>["onPointerDownCapture"];
	onPointerMove?: InputHTMLAttributes<HTMLButtonElement>["onPointerMove"];
	onPointerMoveCapture?: InputHTMLAttributes<HTMLButtonElement>["onPointerMoveCapture"];
	onPointerUp?: InputHTMLAttributes<HTMLButtonElement>["onPointerUp"];
	onPointerUpCapture?: InputHTMLAttributes<HTMLButtonElement>["onPointerUpCapture"];
	onScroll?: InputHTMLAttributes<HTMLButtonElement>["onScroll"];
	onScrollCapture?: InputHTMLAttributes<HTMLButtonElement>["onScrollCapture"];
}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
	(props, ref) => {
		const {
			className,
			style,
			onChange,
			onFocus,
			onFocusCapture,
			onBlur,
			onBlurCapture,
			onMouseDown,
			onMouseDownCapture,
			onMouseEnter,
			onMouseLeave,
			onMouseMove,
			onMouseMoveCapture,
			onMouseOut,
			onMouseOutCapture,
			onMouseOver,
			onMouseOverCapture,
			onMouseUp,
			onMouseUpCapture,
			onKeyDown,
			onKeyDownCapture,
			onKeyUp,
			onKeyUpCapture,
			onSelect,
			onSelectCapture,
			onTouchStart,
			onTouchStartCapture,
			onTouchEnd,
			onTouchEndCapture,
			onTouchMove,
			onTouchMoveCapture,
			onTouchCancel,
			onTouchCancelCapture,
			onWheel,
			onWheelCapture,
			onDrag,
			onDragCapture,
			onDragEnd,
			onDragEndCapture,
			onDragEnter,
			onDragEnterCapture,
			onDragLeave,
			onDragLeaveCapture,
			onDragOver,
			onDragOverCapture,
			onDragStart,
			onDragStartCapture,
			onDrop,
			onDropCapture,
			onInput,
			onInputCapture,
			onInvalid,
			onInvalidCapture,
			onPaste,
			onPasteCapture,
			onPointerDown,
			onPointerDownCapture,
			onPointerMove,
			onPointerMoveCapture,
			onPointerUp,
			onPointerUpCapture,
			onScroll,
			onScrollCapture,
			...rest
		} = props;
		const [color, setColor] = useState<string>("");
		const triggerRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => triggerRef.current!);

		useEffect(() => {
			if (triggerRef.current) {
				setColor(triggerRef.current.value);
			}
		}, [triggerRef.current]);

		return (
			<>
				<input
					type="color"
					ref={triggerRef}
					className="fixed -top-10 -left-10 -z-100 size-px opacity-0 pointer-events-none overflow-hidden"
					{...rest}
					onChange={(e) => {
						setColor(e.target.value);
						onChange?.(e);
					}}
				/>
				<button
					className={cn("size-10 rounded-md border border-gray-300", className)}
					style={{ ...style, backgroundColor: color }}
					onClick={() => {
						triggerRef.current?.click();
					}}
					{...{
						onFocus,
						onFocusCapture,
						onBlur,
						onBlurCapture,
						onMouseDown,
						onMouseDownCapture,
						onMouseEnter,
						onMouseLeave,
						onMouseMove,
						onMouseMoveCapture,
						onMouseOut,
						onMouseOutCapture,
						onMouseOver,
						onMouseOverCapture,
						onMouseUp,
						onMouseUpCapture,
						onKeyDown,
						onKeyDownCapture,
						onKeyUp,
						onKeyUpCapture,
						onSelect,
						onSelectCapture,
						onTouchStart,
						onTouchStartCapture,
						onTouchEnd,
						onTouchEndCapture,
						onTouchMove,
						onTouchMoveCapture,
						onTouchCancel,
						onTouchCancelCapture,
						onWheel,
						onWheelCapture,
						onDrag,
						onDragCapture,
						onDragEnd,
						onDragEndCapture,
						onDragEnter,
						onDragEnterCapture,
						onDragLeave,
						onDragLeaveCapture,
						onDragOver,
						onDragOverCapture,
						onDragStart,
						onDragStartCapture,
						onDrop,
						onDropCapture,
						onInput,
						onInputCapture,
						onInvalid,
						onInvalidCapture,
						onPaste,
						onPasteCapture,
						onPointerDown,
						onPointerDownCapture,
						onPointerMove,
						onPointerMoveCapture,
						onPointerUp,
						onPointerUpCapture,
						onScroll,
						onScrollCapture,
					}}
				></button>
			</>
		);
	},
);
ColorInput.displayName = "ColorInput";
