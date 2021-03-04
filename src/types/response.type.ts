export type CustomResponse<T> = {
    status: number;
    message: string;
    data: T;
};

export type ResponseRecordsResponse<T> = {
    status: number;
    message: string;
    data: { records: T[] };
};
