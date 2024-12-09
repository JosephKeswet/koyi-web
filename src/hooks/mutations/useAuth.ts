import { MutationAdapter } from "@/frameworks/adapters/mutationAdapters";
import { useStorage } from "@/frameworks/useStorage";
import useToast from "@/frameworks/useToast";
import { ISignUp } from "@/interfaces/auth/payload";
import { routes } from "@/lib/constants";
import { ToastType, VerificationMethod } from "@/lib/constants/enums";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function useAuth(mutationAdapter: MutationAdapter<any, any>) {
	const extractErrorType = (response: any) => {
		// Check if the response contains a 'detail' array and that it is not empty
		return response?.detail;
		// if (
		// 	response?.detail &&
		// 	Array.isArray(response.detail) &&
		// 	response.detail.length > 0
		// ) {
		// 	// Extract the 'type' from the first item in the 'detail' array
		// 	return response.detail[0]?.type;
		// }
		// return null; // Return null if no type is found
	};

	const router = useRouter();
	const { saveCookie, getCookies } = useStorage();
	const { toast } = useToast();
	const queryClient = useQueryClient();
	const verification_type = getCookies("verificationMethod");

	const handleSignUpSuccess = ({ token, msg }: any, email: string) => {
		Cookies.set("token", token);
		if (verification_type === VerificationMethod.Email) {
			router.push(routes.via_email);
		} else {
			router.push(routes.via_sms);
		}
	};

	const handleSignUpFailed = (errorResponse: any) => {
		if (errorResponse?.detail && Array.isArray(errorResponse.detail)) {
			// Extract the message from the detail array
			const errorMessage = errorResponse.detail
				.map((error: any) => error.msg) // Extract each error message
				.join(", "); // Join them into one string if there are multiple errors

			toast(errorMessage, { type: ToastType.Failure });
		} else {
			// Fallback if there is no detail array or message
			toast("An unknown error occurred", { type: ToastType.Failure });
		}
	};

	const signUpUser = async (args: ISignUp) => {
		const response = await mutationAdapter.mutate(args);
		console.log("error", extractErrorType(response));
		// if ("value_error" === extractErrorType(response)) {
		// 	handleSignUpFailed(response);
		// } else {
		// 	handleSignUpSuccess(response, args?.email);
		// }
	};

	return { signUpUser };
}
