import { env } from "@/env";
import {
	IResendOtp,
	ISignIn,
	ISignUp,
	IVerifyUser,
} from "@/interfaces/auth/payload";
import { apiRoutes } from "@/lib/constants/api";
import { VerificationMethod } from "@/lib/constants/enums";
import axios from "axios";

export const signUp = async (payload: ISignUp): Promise<any> => {
	const verification_type = payload.verificationType;
	const values = {
		username: payload.username,
		first_name: payload.first_name,
		last_name: payload.last_name,
		email: payload.email,
		phone: payload.phone,
		password: payload.password,
	};

	console.log("values", values);

	try {
		const { data } = await axios.post(
			`${env.NEXT_PUBLIC_URL}${apiRoutes.auth.signUp}?verification_type=${verification_type}`,
			values
		);

		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const signIn = async (payload: ISignIn): Promise<any> => {
	try {
		const { data } = await axios.post(
			`${env.NEXT_PUBLIC_URL}${apiRoutes.auth.signin}`,
			payload
		);

		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const verifyUser = async (payload: IVerifyUser) => {
	try {
		const { data } = await axios.post(
			`${env.NEXT_PUBLIC_URL}${apiRoutes.auth.verifyUser}`,
			payload
		);

		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;

				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const resendOtp = async (payload: IResendOtp) => {
	try {
		const { data } = await axios.post(
			`${env.NEXT_PUBLIC_URL}${apiRoutes.auth.resendOtp}`,
			payload
		);

		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;

				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};
