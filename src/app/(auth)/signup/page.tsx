"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/interfaces/auth/payload";
import {
	BackIcon,
	CheckMark,
	EmailIcon,
	PasswordIcon,
	PhoneIcon,
	ProfileIcon,
	SMSIcon,
	UserIcon,
} from "@/lib/constants/icons";
import { useStorage } from "@/frameworks/useStorage";
import { VerificationMethod, VerificationStep } from "@/lib/constants/enums";
import { routes } from "@/lib/constants";
import { useCustomMutation } from "@/frameworks/useCustomMutation";
import { signUp } from "@/services/authService";
import useAuth from "@/hooks/mutations/useAuth";
import Loader from "@/components/global/Loader";

export default function Page() {
	const mutation = useCustomMutation(signUp);

	const { signUpUser } = useAuth(mutation);
	const router = useRouter();
	const { getCookies, saveCookie } = useStorage();
	const [step, setStep] = useState<string>(() => getCookies("step"));
	const [channel, setChannel] = useState<string>(
		() => getCookies("verificationMethod") || "phone"
	);

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

	// Handle verification channel selection and save to cookies
	function handleVerificationSelection(selectedChannel: VerificationMethod) {
		setChannel(selectedChannel);
		saveCookie("verificationMethod", JSON.stringify(selectedChannel));
	}

	function handleStep(step: VerificationStep) {
		setStep(step);
		saveCookie("step", step);
	}

	// Form submission
	function onSubmit(values: z.infer<typeof signUpSchema>) {
		// const payload = { ...values, verificationMethod: channel };
		if (channel === VerificationMethod.Email) {
			saveCookie("email", values.email);
			signUpUser({ ...values, verificationType: VerificationMethod.Email });
		} else {
			saveCookie("phone", values.phone);

			signUpUser({ ...values, verificationType: VerificationMethod.SMS });
		}
		// console.log(payload);
		// Send payload to the API
	}

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col gap-6 h-auto w-auto lg:w-[528px] py-4 px-4">
				<div className="flex items-center">
					<BackIcon
						handlerFunc={() => handleStep(VerificationStep.Verification)}
					/>
				</div>

				{step === "verification" ? (
					<div className="flex flex-col gap-2 md:gap-6">
						<h1 className="text-left md:text-left text-xl md:text-[48px] text-black font-semibold">
							Verification type
						</h1>
						<p className="text-[#95989E] text-sm text-left">
							Please select your preferred option to receive your OTP.
						</p>

						{/* SMS Option */}
						<div
							onClick={() =>
								handleVerificationSelection(VerificationMethod.SMS)
							}
							className={`flex items-center justify-between px-4 py-6 w-full h-[85px] rounded-[6px] ${
								channel === VerificationMethod.SMS
									? "border-[1.5px] border-primary"
									: "border-[1.5px] border-slate-300"
							}`}
						>
							<div className="flex items-center gap-3">
								<SMSIcon />
								<p className="text-[#95989E] text-sm text-left">Via SMS</p>
							</div>
							{channel === VerificationMethod.SMS && <CheckMark />}
						</div>

						{/* Email Option */}
						<div
							onClick={() =>
								handleVerificationSelection(VerificationMethod.Email)
							}
							className={`flex items-center justify-between px-4 py-6 w-full h-[85px] rounded-[6px] ${
								channel === "email"
									? "border-[1.5px] border-primary"
									: "border-[1.5px] border-slate-300"
							}`}
						>
							<div className="flex items-center gap-3">
								<EmailIcon />
								<p className="text-[#95989E] text-sm text-left">Via email</p>
							</div>
							{channel === "email" && <CheckMark />}
						</div>

						{/* Proceed Button */}
						<div className="flex items-center justify-center mt-6">
							<Button
								type="submit"
								className="w-full"
								onClick={() => handleStep(VerificationStep.SignUp)}
							>
								Proceed
							</Button>
						</div>
					</div>
				) : (
					<>
						<h1 className="text-left md:text-center text-xl md:text-[48px] text-black font-semibold">
							Sign Up
						</h1>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<section className="w-full flex flex-col gap-4">
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Phone</FormLabel>
												<FormControl>
													<Input
														{...field}
														icon={<PhoneIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
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
									<div className="grid grid-cols-2 gap-2">
										<FormField
											control={form.control}
											name="first_name"
											render={({ field }) => (
												<FormItem>
													<FormLabel>First name</FormLabel>
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
													<FormLabel>Last name</FormLabel>
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
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														icon={<EmailIcon />}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
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
								</section>
								<Button
									type="submit"
									className="w-full h-[55px] text-white"
									disabled={mutation.isPending}
								>
									{mutation.isPending ? <Loader /> : "Sign Up"}
								</Button>
							</form>
						</Form>
					</>
				)}
			</div>
		</div>
	);
}
