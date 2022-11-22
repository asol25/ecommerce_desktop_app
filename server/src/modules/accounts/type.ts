export interface optionsFindOneAccount {
    id?: number;
    username?: string;
    password?: string;
    email?: string
    accessToken?: string
    refresshToken?: string
}

export interface User {
    id?: string;
    username?: string;
    password?: string;
    email?: string;
    accessToken?: string;
    refresshToken?: string;
}