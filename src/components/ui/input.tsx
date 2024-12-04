import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, icon, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);

		// Toggle password visibility
		const togglePasswordVisibility = () => {
			setShowPassword((prev) => !prev);
		};

		const isPasswordType = type === "password";

		return (
			<div className="relative flex items-center">
				{icon && (
					<div className="absolute left-3 flex items-center pointer-events-none">
						{icon}
					</div>
				)}
				<input
					type={isPasswordType && showPassword ? "text" : type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					ref={ref}
					{...props}
				/>
				{/* Eye toggle for password fields */}
				{isPasswordType && (
					<div
						className="absolute right-3 flex items-center cursor-pointer"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? (
							<EyeIcon className="h-5 w-5 text-gray-500" />
						) : (
							<EyeOffIcon className="h-5 w-5 text-gray-500" />
						)}
					</div>
				)}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
