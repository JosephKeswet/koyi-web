"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Loader from "@/components/global/Loader";
import { useCustomMutation } from "@/frameworks/useCustomMutation";
import Link from "next/link";
import { routes } from "@/lib/constants";
import { signUpSchema } from "@/interfaces/auth/payload";
import {
	BackIcon,
	EmailIcon,
	PasswordIcon,
	PhoneIcon,
	ProfileIcon,
	UserIcon,
} from "@/lib/constants/icons";
import { useRouter } from "next/navigation";

type Props = {};

export default function Page({}: Props) {
	const router = useRouter();
	// const mutation = useCustomMutation(signIn);

	// const { signInUser } = useAuth(mutation);
	// 1. Define your form.
	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			username: "",
			first_name: "",
			last_name: "",
			email: "",
			phone: "+234",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof signUpSchema>) {
		console.log(values);
		// signInUser(values);
	}
	return (
		<div>
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-6 h-auto w-auto lg:w-[528px] py-4 px-4">
					<div className="flex items-center justify-left">
						<BackIcon handlerFunc={() => router.back()} />
					</div>
					<h1 className="text-left md:text-center text-xl md:text-[48px] text-black font-semibold">
						Sign Up
					</h1>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<section className="w-full flex flex-col gap-4">
								<div className="w-full">
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													Phone
												</FormLabel>
												<FormControl>
													<Input
														type="tel"
														{...field}
														icon={<PhoneIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="w-full">
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													Username
												</FormLabel>
												<FormControl>
													<Input
														{...field}
														icon={<UserIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<FormField
										control={form.control}
										name="first_name"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													First name
												</FormLabel>
												<FormControl>
													<Input
														{...field}
														icon={<ProfileIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="last_name"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													Last name
												</FormLabel>
												<FormControl>
													<Input
														{...field}
														icon={<ProfileIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="w-full">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													Email
												</FormLabel>
												<FormControl>
													<Input
														type="email"
														{...field}
														icon={<EmailIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="w-full">
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-primary-black">
													Password
												</FormLabel>
												<FormControl>
													<Input
														type="password"
														{...field}
														icon={<PasswordIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</section>
							<div className="flex flex-col gap-4">
								<Button
									type="submit"
									className="w-full h-[55px] text-white"
									// disabled={isPending}
								>
									{/* {isPending ? (
										<ReloadIcon className="animate-spin" />
									) : (
										"Sign Up"
									)} */}
									Signup
								</Button>
								<p className="text-black text-sm text-center">
									Already have an account.{" "}
									<Link href={routes.signin}>
										<span className="text-black underline">Sign In</span>
									</Link>
								</p>
								<p className="text-black text-sm text-center">
									By signing up to create an account I accept Koyi&apos;s ,
									<span className="text-[#3063E9]">Terms of Service</span> and
									<span className="text-[#3063E9]"> Privacy Policy</span>.
								</p>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
