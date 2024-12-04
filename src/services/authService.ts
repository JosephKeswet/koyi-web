import { env } from "@/env";
import { IResendOtp, ISignUp, IVerifyUser } from "@/interfaces/auth/payload";
import { apiRoutes } from "@/lib/constants/api";
import axios from "axios";

export const signUp = async (payload: ISignUp): Promise<any> => {
	try {
		const { data } = await axios.post(
			`${env.NEXT_PUBLIC_URL}${apiRoutes.auth.signUp}?verification_type=email`,
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
