import { VerificationMethod } from "@/lib/constants/enums";
import {
	phoneRegex,
	REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@/lib/constants/regex";
import { z } from "zod";

export const signUpSchema = z.object({
	username: z.string({ message: "Username is required" }).min(4, {
		message: "Username should be at least 4 characters long",
	}),
	first_name: z
		.string({
			message: "First name is required",
		})
		.min(4, {
			message: "First name should be at least 4 characters long",
		}),
	last_name: z
		.string({
			message: "Last name is required",
		})
		.min(4, { message: "Last name should be at least 4 characters" }),
	email: z.string().email({
		message: "Email is required and should be a valid email",
	}),
	phone: z
		.string()
		.regex(phoneRegex, { message: "Please enter a valid phone number" }),
	password: z
		.string({
			message: "Password is required",
		})
		.min(4, {
			message: "Password should be at least 4 characters long",
		}),
});

export const verifyUserSchema = z.object({
	verification_type: z.enum(["email", "phone"]),
	email_or_phone: z.string(),
	otp: z.string().regex(REGEXP_ONLY_DIGITS_AND_CHARS, {
		message: "OTP should only contain digits",
	}),
});

export interface ISignIn {
	username: string;
	password: string;
}

export interface ISignUp {
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	password: string;
	verificationType: VerificationMethod;
}

export interface IVerifyUser {
	verification_type: string;
	email_or_phone: string;
	otp: string;
}

export interface IResendOtp {
	verification_type: string;
	email_or_phone: string;
}
