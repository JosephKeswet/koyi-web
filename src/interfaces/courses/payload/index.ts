export interface IGetModule {
	module_id: string;
	course_id: string;
}

export interface IGetLesson {
	lesson_id: string;
	course_id: string;
	module_id: string;
}

export interface IGetExercises {
	course_id: string;
	module_id: string;
}

export interface IGetGrades {
	course_id: string;
}
