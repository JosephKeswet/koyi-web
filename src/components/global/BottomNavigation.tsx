"use client";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BottomNavigation() {
	const router = useRouter();
	const pathname = usePathname();

	const isActive = (routePath: string) => {
		return pathname.includes(routePath);
	};

	const showmerchantLayout =
		pathname === routes.onboarding ||
		pathname === routes.signup ||
		pathname === routes.signin ||
		pathname === routes.forgot_password ||
		pathname === routes.reset_password ||
		pathname === routes.verification_method ||
		pathname === routes.via_email ||
		pathname === routes.via_sms;

	if (showmerchantLayout) {
		return;
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white dark:border-gray-800 dark:bg-gray-950">
			<NavItem
				href={routes.home}
				active={isActive(routes.home)}
			>
				<HomeIcon color={isActive(routes.home) ? "#1260D6" : "#95989E"} />
				Home
			</NavItem>
			<NavItem
				href={routes.courses}
				active={isActive(routes.courses)}
			>
				<CourseIcon color={isActive(routes.courses) ? "#1260D6" : "#95989E"} />
				My courses
			</NavItem>
			<NavItem
				href={routes.chats}
				active={isActive(routes.chats)}
			>
				<ChatIcon color={isActive(routes.chats) ? "#1260D6" : "#95989E"} />
				Chat
			</NavItem>
			<NavItem
				href={routes.settings}
				active={isActive(routes.settings)}
			>
				<SettingIcon
					color={isActive(routes.settings) ? "#1260D6" : "#95989E"}
				/>
				Settings
			</NavItem>
		</div>
	);
}

interface NavItemProps {
	href: string;
	active: boolean;
	children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, active, children }) => {
	return (
		<Link
			href={href}
			passHref
		>
			<p
				className={`flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors ${
					active ? "text-primary" : "text-[#95989E] "
				}  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300`}
				// prefetch={false}
			>
				{children}
			</p>
		</Link>
	);
};

interface IconProps {
	color: string;
}

function HomeIcon({ color }: IconProps) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21.61 8.37009L14.68 2.83009C13.61 1.97009 11.88 1.97009 10.82 2.82009L3.89001 8.37009C3.11001 8.99009 2.61001 10.3001 2.78001 11.2801L4.11001 19.2401C4.35001 20.6601 5.71001 21.8101 7.15001 21.8101H18.35C19.78 21.8101 21.15 20.6501 21.39 19.2401L22.72 11.2801C22.88 10.3001 22.38 8.99009 21.61 8.37009ZM12.75 15.5001C11.37 15.5001 10.25 14.3801 10.25 13.0001C10.25 11.6201 11.37 10.5001 12.75 10.5001C14.13 10.5001 15.25 11.6201 15.25 13.0001C15.25 14.3801 14.13 15.5001 12.75 15.5001Z"
				fill={color}
			/>
		</svg>
	);
}

function CourseIcon({ color }: IconProps) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.25 16.7399V4.66994C22.25 3.46994 21.27 2.57994 20.08 2.67994H20.02C17.92 2.85994 14.73 3.92994 12.95 5.04994L12.78 5.15994C12.49 5.33994 12.01 5.33994 11.72 5.15994L11.47 5.00994C9.69 3.89994 6.51 2.83994 4.41 2.66994C3.22 2.56994 2.25 3.46994 2.25 4.65994V16.7399C2.25 17.6999 3.03 18.5999 3.99 18.7199L4.28 18.7599C6.45 19.0499 9.8 20.1499 11.72 21.1999L11.76 21.2199C12.03 21.3699 12.46 21.3699 12.72 21.2199C14.64 20.1599 18 19.0499 20.18 18.7599L20.51 18.7199C21.47 18.5999 22.25 17.6999 22.25 16.7399Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.25 5.48999V20.49"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 8.48999H5.75"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.75 11.49H5.75"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChatIcon({ color }: IconProps) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.73 10.79V14.79C18.73 15.05 18.72 15.3 18.69 15.54C18.46 18.24 16.87 19.58 13.94 19.58H13.54C13.29 19.58 13.05 19.7 12.9 19.9L11.7 21.5C11.17 22.21 10.31 22.21 9.78 21.5L8.57999 19.9C8.44999 19.73 8.16 19.58 7.94 19.58H7.54001C4.35001 19.58 2.75 18.79 2.75 14.79V10.79C2.75 7.86001 4.10001 6.27001 6.79001 6.04001C7.03001 6.01001 7.28001 6 7.54001 6H13.94C17.13 6 18.73 7.60001 18.73 10.79Z"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.73 6.79001V10.79C22.73 13.73 21.38 15.31 18.69 15.54C18.72 15.3 18.73 15.05 18.73 14.79V10.79C18.73 7.60001 17.13 6 13.94 6H7.54001C7.28001 6 7.03001 6.01001 6.79001 6.04001C7.02001 3.35001 8.61001 2 11.54 2H17.94C21.13 2 22.73 3.60001 22.73 6.79001Z"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.2455 13.25H14.2545"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.7455 13.25H10.7545"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.2455 13.25H7.2545"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SettingIcon({ color }: IconProps) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.25 15C13.9069 15 15.25 13.6569 15.25 12C15.25 10.3431 13.9069 9 12.25 9C10.5931 9 9.25 10.3431 9.25 12C9.25 13.6569 10.5931 15 12.25 15Z"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.25 12.8799V11.1199C2.25 10.0799 3.1 9.21994 4.15 9.21994C5.96 9.21994 6.7 7.93994 5.79 6.36994C5.27 5.46994 5.58 4.29994 6.49 3.77994L8.22 2.78994C9.01 2.31994 10.03 2.59994 10.5 3.38994L10.61 3.57994C11.51 5.14994 12.99 5.14994 13.9 3.57994L14.01 3.38994C14.48 2.59994 15.5 2.31994 16.29 2.78994L18.02 3.77994C18.93 4.29994 19.24 5.46994 18.72 6.36994C17.81 7.93994 18.55 9.21994 20.36 9.21994C21.4 9.21994 22.26 10.0699 22.26 11.1199V12.8799C22.26 13.9199 21.41 14.7799 20.36 14.7799C18.55 14.7799 17.81 16.0599 18.72 17.6299C19.24 18.5399 18.93 19.6999 18.02 20.2199L16.29 21.2099C15.5 21.6799 14.48 21.3999 14.01 20.6099L13.9 20.4199C13 18.8499 11.52 18.8499 10.61 20.4199L10.5 20.6099C10.03 21.3999 9.01 21.6799 8.22 21.2099L6.49 20.2199C5.58 19.6999 5.27 18.5299 5.79 17.6299C6.7 16.0599 5.96 14.7799 4.15 14.7799C3.1 14.7799 2.25 13.9199 2.25 12.8799Z"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
// Define other icon components similarly (CourseIcon, ChatIcon, SettingIcon)
