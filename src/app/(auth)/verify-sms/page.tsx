"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useStorage } from "@/frameworks/useStorage";
import { routes } from "@/lib/constants";
import { VerificationMethod } from "@/lib/constants/enums";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BackIcon } from "@/lib/constants/icons";
import { verifyUserSchema } from "@/interfaces/auth/payload";

const FormSchema = z.object({
	pin: z.string().length(6, {
		message: "Your one-time password must be exactly 6 characters.",
	}),
});

export default function Page() {
	const { getCookies } = useStorage();
	const phone = getCookies(VerificationMethod.SMS);
	const verification_type = getCookies("verificationMethod");
	const router = useRouter();

	const form = useForm<z.infer<typeof verifyUserSchema>>({
		resolver: zodResolver(verifyUserSchema),
		defaultValues: {
			email_or_phone: phone,
			verification_type,
			otp: "",
		},
	});

	function onSubmit(data: z.infer<typeof verifyUserSchema>) {
		console.log("OTP submitted:", data);
	}

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col gap-6 h-auto w-auto lg:w-[528px] py-4 px-4">
				<div className="flex items-center justify-left">
					<div className="flex items-center justify-left">
						<BackIcon handlerFunc={() => router.back()} />
					</div>
				</div>

				<div className="flex flex-col gap-2 md:gap-6">
					<h1 className="text-left md:text-left text-xl md:text-[48px] text-black font-semibold">
						Verify SMS
					</h1>
					<p className="text-[#95989E] text-sm text-left">
						We have sent an SMS to <span className="text-black">{phone}</span>
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
											Please enter the one-time password sent to your phone.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full h-[56px]"
							>
								Proceed
							</Button>
						</form>
					</Form>

					<p className="text-black text-sm text-left pt-[40px]">
						Did not receive the OTP? Resend OTP in{" "}
						<span className="font-bold text-right">00:26</span>
					</p>
				</div>
				{/* 
				<Link
					href={routes.signin}
					className="grid gap-4 py-4"
				>
					<Button
						variant="link"
						className="w-full"
					>
						Sign In
					</Button>
				</Link> */}
			</div>
		</div>
	);
}
