import useAxiosAuth from "@/hooks/useAxiosAuth";
import { apiRoutes } from "@/lib/constants/api";

export default function useProfessionalService() {
	const axiosAuth = useAxiosAuth();

	// const getAllProfessionals = async (): Promise<any> => {
	//     try {
	//         const { data } = await axiosAuth.get(`${apiRoutes.professionals.getAll}`);
	//         return data;
	//     } catch (error: any) {
	//         if (axios.isAxiosError(error)) {
	//             const axiosError = error;
	//             if (axiosError.response) {
	//                 return axiosError?.response?.data;
	//             }
	//         }

	//         throw error;
	//     }
	// };
}
