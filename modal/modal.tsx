import { XMarkIcon } from "@heroicons/react/24/outline";
import { type ReactNode, useEffect } from "react";

import { Button } from "../button";
import { cn } from "../utils";

export interface ModalProps {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
	className?: string;
	disableAutoBlur?: boolean;
	hiddenClose?: boolean;
}

export const Modal = (props: ModalProps) => {
	const { children, open, onClose, className, disableAutoBlur, hiddenClose } =
		props;

	useEffect(() => {
		if (open) {
			const activeElement = document.activeElement;
			if (activeElement instanceof HTMLElement && !disableAutoBlur) {
				activeElement.blur();
			}
		}
	}, [open, disableAutoBlur]);

	return (
		<>
			<div
				className={cn(
					"fixed inset-0 z-50 size-screen bg-gray-500/25 overflow-hidden transition-opacity duration-200",
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none",
				)}
				onClick={onClose}
			/>
			<div
				className={cn(
					"fixed inset-0 z-60 m-auto w-full max-w-md h-fit min-h-12 p-2 shadow-md rounded-md bg-white transition-opacity duration-200",
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none",
					className,
				)}
			>
				<div className="relative">
					{!hiddenClose ? (
						<Button
							variant="ghost"
							onClick={onClose}
							className="absolute top-0 right-0 flex size-8 items-center justify-center rounded-full"
						>
							<XMarkIcon className="size-5 shrink-0" />
						</Button>
					) : undefined}
					{children}
				</div>
			</div>
		</>
	);
};
