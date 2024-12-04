"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useStorage } from "@/frameworks/useStorage";
import { BackIcon } from "@/lib/constants/icons";
import { routes } from "@/lib/constants";
import { VerificationMethod } from "@/lib/constants/enums";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { verifyUserSchema } from "@/interfaces/auth/payload";

export default function EmailVerificationForm() {
	const { getCookies } = useStorage();
	const email = getCookies(VerificationMethod.Email);
	const verification_type = getCookies("verificationMethod");
	const router = useRouter();

	const form = useForm<z.infer<typeof verifyUserSchema>>({
		resolver: zodResolver(verifyUserSchema),
		defaultValues: {
			email_or_phone: email,
			verification_type,
			otp: "",
		},
	});

	function onSubmit(data: z.infer<typeof verifyUserSchema>) {
		console.log("OTP submitted:", data);
	}

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col gap-6 h-auto w-full lg:w-[528px] py-4 px-4">
				<div className="flex items-center justify-left">
					<BackIcon handlerFunc={() => router.back()} />
				</div>
				<div className="flex flex-col gap-2 md:gap-6">
					<h1 className="text-left md:text-left text-xl md:text-[48px] text-black font-semibold">
						Verify Email
					</h1>
					<p className="text-[#95989E] text-sm text-left">
						We have sent an email to <span className="text-black">{email}</span>
					</p>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<FormField
								control={form.control}
								name="otp"
								render={({ field }) => (
									<FormItem>
										<FormLabel>One-Time Password</FormLabel>
										<FormControl>
											<InputOTP
												maxLength={6}
												{...field}
											>
												<InputOTPGroup className="flex gap-2">
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										<FormDescription>
											Please enter the one-time password sent to your email.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full h-[56px]"
							>
								Submit
							</Button>
						</form>
					</Form>
					<p className="text-black text-sm text-left pt-[40px]">
						Did not receive the OTP?{" "}
						<span className="font-bold">Resend OTP</span>
					</p>
				</div>
				<AlertDialog>
					{/* <AlertDialogTrigger asChild>
						<Button className="w-full h-[56px]">Proceed</Button>
					</AlertDialogTrigger> */}
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Account successfully created</AlertDialogTitle>
							<AlertDialogDescription>
								Please proceed to log in.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<Link href={routes.signin}>
								<AlertDialogAction className="w-full h-[55px]">
									Log in
								</AlertDialogAction>
							</Link>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
}
