export interface IHomeIntroduce {
	social: string[];
	title: string;
	description: string;
	cost: string;
	btn: string[];
	thumbnail: string;
}

export interface IArticleProductProps {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	price: string;
	price_currency?: string;
	price_amount?: string;
	price_currency_amount?: string;
}

export interface IAnalytic {
	id: number;
	viewCount: number;
	watchTime: number;
	bookingCount: number;
}

export interface ICourses {
	courses?: any;
	id: number;
	title: string;
	description: string;
	overviews: string;
	thumbnailUrl: string;
	oddPrice: number;
	newPrice: number;
	analytic: IAnalytic;
	category: ICategories;
	rating: IRating;
	syllabus?: ISyllabus[] | null;
	specialization?: ISpecialization;
	faq?: IFAQ[];
}

export interface ICategories {
	id: number;
	name: string;
}

export interface IRating {
	id: number;
	flag: number;
	like: number;
	love: number;
	star: number;
}

export interface IContent {
	metadata: object;
	sys: object;
	fields: IContentCourse;
}

export interface IContentCourse {
	whatYoullLearn: [];
	thisCourseIncludes: [];
	courseContent: [];
	becomeAnExperiencedPythonProgrammer: object;
}

export interface ISyllabus {
	id: number;
	title: string;
	paragraphs: string[];
}

export interface ISpecialization {
	id: number;
	title: string;
	description: string;
}

export interface IFAQ {
	id: number;
	title: string;
	description: string;
}

export interface IVideo {
	createdDate: string;
	title: string;
	description: string;
	id: number;
	thumbanailUrl: string;
	videoUrl: string;
	like: number;
	views: number;
	comments: IComments[] | null;
}

export interface IComments {
	id: number;
	name: string;
}
