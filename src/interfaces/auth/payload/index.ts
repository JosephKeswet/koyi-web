import { phoneRegex } from "@/lib/constants/regex";
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

export interface ISignUp {
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	password: string;
}
