import useAxiosAuth from "@/hooks/useAxiosAuth";
import {
	IGetExercises,
	IGetGrades,
	IGetLesson,
	IGetModule,
} from "@/interfaces/courses/payload";
import { IGetGradesResponse } from "@/interfaces/courses/responses";
import { apiRoutes, apiVersion } from "@/lib/constants/api";
import axios from "axios";

export default function useCourseService() {
	const axiosAuth = useAxiosAuth();

	const getAllCourses = async (): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(`${apiRoutes.courses.getAll}`);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const getCourse = async (course_id: string): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.getById}?course_id=${course_id}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const searchCourse = async (searchQuery: string): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.search}?query=${searchQuery}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const getModule = async ({
		module_id,
		course_id,
	}: IGetModule): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.getModuleById}?module_id=${module_id}&course_id=${course_id}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const getLesson = async ({
		module_id,
		course_id,
		lesson_id,
	}: IGetLesson): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.getLessonsByModule}?module_id=${module_id}&course_id=${course_id}&lesson_id=${lesson_id}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const getExercises = async ({
		module_id,
		course_id,
	}: IGetExercises): Promise<any> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.getLessonsByModule}?module_id=${module_id}&course_id=${course_id}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};

	const getUserGrades = async ({
		course_id,
	}: IGetGrades): Promise<IGetGradesResponse> => {
		try {
			const { data } = await axiosAuth.get(
				`${apiRoutes.courses.getUserGradesByCourseId}?course_id=${course_id}`
			);
			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					return axiosError?.response?.data;
				}
			}

			throw error;
		}
	};
	return {
		getAllCourses,
		getCourse,
		searchCourse,
		getModule,
		getLesson,
		getExercises,
		getUserGrades,
	};
}
