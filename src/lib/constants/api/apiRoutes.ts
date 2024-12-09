export const apiRoutes = {
	auth: {
		signUp: "/auth/user",
		verifyUser: "/auth/user/verify",
		resendOtp: "/auth/user/resend_reg_otp",
		signin: "/auth/user/tokens",
	},
	courses: {
		getAll: "/courses",
		getById: "/courses/course",
		search: "courses/search",
		getModuleById: "/courses/module",
		getLessonsByModule: "/courses/lessons",
		getExercisesByModule: "/courses/exercises",
		getUserGradesByCourseId: "/courses/grades",
	},
};
