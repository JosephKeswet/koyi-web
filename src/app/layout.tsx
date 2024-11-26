import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/global/Sidebar";
import BottomNavigation from "@/components/global/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Koyi",
	description: "Learning platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{" "}
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex items-start h-full md:h-screen">
						<Sidebar />
						<div className="w-full flex-1 overflow-y-scroll min-h-screen md:h-screen pb-20 md:pb-0">
							{children}
						</div>
						<div className="md:hidden fixed bottom-o left-0 right-0 z-50">
							<BottomNavigation />
						</div>
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
