export interface IExercise {
	pos: number;
	passed: boolean;
	attempted: boolean;
}

export interface IModule {
	title: string;
	pos: number;
	exercises: IExercise[];
}

export interface IGetGradesResponse {
	modules: IModule[];
}

export interface ILessonResponse {
	id: string;
	title: string;
	pos: number;
	textContent: string;
	type: string;
	videoContentUrl: string;
}

export interface ICourse {
	id: string;
	title: string;
	headerImgUrl: string;
	duration: string; // ISO 8601 duration format, e.g., "P3D"
	category: string; // Example: "Frontend Dev"
	studentsEnrolledNo: number;
}

export interface IGetAllCoursesResponse {
	data: ICourse[];
}

export interface IGetCourseResponse {
	id: string;
	title: string;
	duration: string; // ISO 8601 duration format, e.g., "P3D"
	category: string; // Example: "Frontend Dev"
	rating: number; // Example: 0
	studentsEnrolledNo: number; // Example: 0
	progress: string; // Example: "Completed"
	headerImgUrl: string;
	noOfLessons: number; // Example: 0
	description: string;
	whatYouLearn: string;
	modules: { id: string; pos: number; title: string }[];
}

export interface IGetModuleResponse {
	title: string;
	lessons: ILesson[];
}

export interface ILesson {
	id: string;
	title: string;
	pos: number;
	type: string; // Example: "Article"
}

export interface ICourseSearchResponse {
	data: { id: string; title: string; description: string; takeaway: string }[];
}

export interface IGetLessonResponse {
	id: string;
	title: string;
	pos: number;
	text_content: string;
	type: string; // Example: "Article"
	vid_content_url: string;
}

export interface IExercisesResponse {
	exercises: Array<{
		id: string;
		question: string;
		pos: number;
		options: Array<{
			id: string;
			content: string;
		}>;
		media_url: string;
	} | null>;
}
