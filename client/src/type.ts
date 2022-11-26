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
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    oddPrice: number;
    newPrice: number;
    analytic: IAnalytic;
    category: ICategorys;
}

export interface ICategorys {
    id: number;
    name: string;
}
