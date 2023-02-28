export interface IcreateSavingsGroup {
    id?: number;
    group_name: string;
    group_description: string;
    group_creator: number;
    group_invite_code: string;
}

export interface IviewSavingsGroup {
    id: number;
    group_name: string;
    group_description: string;
    group_creator: number;
    group_invite_code: string;
    updatedAt?: string;
    createdAt?: string;
}
