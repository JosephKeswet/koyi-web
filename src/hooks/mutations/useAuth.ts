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
	const router = useRouter();
	const { saveCookie, getCookies } = useStorage();
	const { toast } = useToast();
	const queryClient = useQueryClient();
	const verification_type = getCookies("verificationMethod");

	// const handleSignInSuccess = ({ token, message }: SignInResponse) => {
	// 	queryClient.prefetchQuery({
	// 		queryKey: [queryKeys],
	// 	});
	// 	toast(message, true);
	// 	saveCookie("token", token);
	// 	router.push(routes.transactions);
	// };

	// const handleSignInFailed = ({ message }: SignInResponse) => {
	// 	toast(message!);
	// };

	const handleSignUpSuccess = ({ token, msg }: any, email: string) => {
		Cookies.set("token", token);
		if (verification_type === VerificationMethod.Email) {
			router.push(routes.via_email);
		} else {
			router.push(routes.via_sms);
		}
	};

	const handleSignUpFailed = ({ message }: any) => {
		toast(message!, { type: ToastType.Failure });
	};

	// const handleVerifySuccess = (
	// 	{ orientation, message, token }: VerifyEmailResponse,
	// 	closeDialog?: () => void
	// ) => {
	// 	saveCookie("token", token);
	// 	if (closeDialog) {
	// 		closeDialog();
	// 		toast(message!, true);
	// 		queryClient.invalidateQueries({
	// 			queryKey: [queryKeys.settings.default],
	// 		});
	// 	}

	// 	router.push(routes.settings);
	// };

	// const handleVerifyFailed = ({ message }: VerifyEmailResponse) => {
	// 	toast(message!);
	// };

	// const signInUser = async (args: ISignIn) => {
	// 	const response = await mutationAdapter.mutate(args);
	// 	if (response.state === ResponseState.Success) {
	// 		handleSignInSuccess(response);
	// 	} else {
	// 		handleSignInFailed(response);
	// 	}
	// };

	// const handleResetSuccess = ({ message }: IResetPasswordResponse) => {
	// 	toast(message!, true);
	// 	router.push(routes.signin);
	// };

	// const handleResetFailed = ({ message }: IResetPasswordResponse) => {
	// 	toast(message!, false);
	// };

	// const resetPasswordMutate = async (args: IResetPassword) => {
	// 	const response = await mutationAdapter.mutate(args);
	// 	if (response.state === ResponseState.Success) {
	// 		handleResetSuccess(response);
	// 	} else {
	// 		handleResetFailed(response);
	// 	}
	// };

	const signUpUser = async (args: ISignUp) => {
		const response = await mutationAdapter.mutate(args);
		// if (response === ResponseState.Success) {
		// 	handleSignUpSuccess(response, args?.email);
		// } else {
		// 	handleSignUpFailed(response);
		// }
	};

	// const verifyUserEmail = async (
	// 	args: IVerifyEmail,
	// 	closeDialog?: () => void
	// ) => {
	// 	const response: VerifyEmailResponse = await mutationAdapter.mutate(args);
	// 	if (response.state === ResponseState.Success) {
	// 		handleVerifySuccess(response, closeDialog);
	// 	} else {
	// 		handleVerifyFailed(response);
	// 	}
	// };

	return { signUpUser };
}
