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
